import axios from 'axios';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import useFirebase from '../../Hooks/useFirebase';
import "./PostBlood.css"

const PostBlood = () => {
    const history = useHistory();
    const{user} = useFirebase();
    const [delivery, setDelivery] = useState("");
    const [deliverycon, setDeliverycon] = useState(false);
    const [name, setName] = useState('');
    const [group, setGroup] = useState('');
    const [problem, setProblem] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [district, setDistrict] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [refferance, setRefferance] = useState('');
    const [email, setEmail] = useState('');
    const [himoglobin, setHimoglobin] = useState('');

    const postHimoglobin = e => {
        setHimoglobin(e.target.value);
    }
    const postName = e => {
        setName(e.target.value);
    }
    const postGroup = e => {
        setGroup(e.target.value);
    }
    const postproblem = e => {
        setProblem(e.target.value);
    }
    const postTime = e => {
        setTime(e.target.value);
    }
    const notdeliveryPatiend = e => {
        setDelivery("NO");
        setDeliverycon(false)
    }
    const deliveryPatiend = e => {
        setDelivery("YES");
        setDeliverycon(true);
    }
    const postDate = e => {
        setDate(e.target.value);
    }
    const postDistrict = e => {
        setDistrict(e.target.value);
    }
    const postAddress = e => {
        setAddress(e.target.value);
    }
    const postContact = e => {
        setContact(e.target.value);
    }
    const postRefferance = e => {
        setRefferance(e.target.value);
    }
    const postEmail = e => {
        setEmail(e.target.value);
    }
  

    const allData = { registeremail:user.email, name: name, bloodgroup: group, problem: problem,delivery:delivery,himoglobinpoint:himoglobin, time:time,date:date,district:district,address:address,contact:contact,refferance:refferance,contactemail:email}
    const [reloadd,setReload] = useState(false);
    const [wait, setWait] = useState(false);
    const posttSubmit = e => {
        setWait(true)
        axios.post('https://evening-river-37909.herokuapp.com/bloodpost', allData)
            .then(res => setReload(res))
            .then(res =>setWait(false)
            )
        e.preventDefault();
        
    }
    if(reloadd){
        let path = `/`;
        history.push(path);
        window.location.reload();
    }

   
    return (
        <div>

            <div className="row d-flex justify-content-center">
                
                <div className="col-md-6 col-sm-10 col-xs-6 shadow m-5 p-5" >
                <div className='text-center'>
                <Link to="/">
                <div className='close' > <img width="50%" height="50%" src="./Close-256.png" alt="" /> </div>
                </Link>
                </div>

                    <div className="d-flex flex-column mb-5"> <h1 className="text-center decoration">রক্তের জন্য আবেদন করুন</h1>
                        <span className="text-center "> সাবমিট করার ৫ মিনিটের মধ্যেই আপনার পোস্ট টি লাইভ হবে </span> <center><hr style={{width:"50%",backgroundColor:"black",borderTop:"3px solid black", height:"1px",marginTop:"15px"}} /> </center>
                        <center><hr style={{width:"30%",backgroundColor:"black",borderTop:"3px solid black", height:"1px",marginTop:"0px"}} /> </center>
                        <center><hr style={{width:"20%",backgroundColor:"black",borderTop:"3px solid black", height:"1px",marginTop:"0px"}} /> </center>
                        </div>
                    <form onSubmit={posttSubmit} action="" className="ms-3">
                        <h5>রুগীর নাম <span style={{color:"red"}}> *</span></h5>
                        <input required onChange={postName} placeholder="রুগীর নাম লিখুন " style={{ width: "95%", padding: "8px", marginBottom: "20px" }} type="text" name="name" />
                        <h5>রক্তের গ্রুপ<span style={{color:"red"}}> *</span> </h5>
                        <select required onChange={postGroup} style={{ width: "95%", padding: "8px", marginBottom: "20px" }} className="custom-select" id="inputGroupSelect01">
                            <option>-- রক্তের গ্রুপ নির্বাচন করুন --</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                        </select>
                        <h5> রুগীর সমস্যা<span style={{color:"red"}}> *</span>  </h5>
                        <input required
                            onChange={postproblem} placeholder="সংক্ষিপ্ত ভাবে বর্ণনা দিন" style={{ width: "95%", height: "80px", padding: "8px", marginBottom: "20px" }} type="text" name="text" />
                        <h5>ডেলিভারির রুগী?<span style={{color:"red"}}> *</span></h5>
                        <div className="d-flex mb-4 pt-3">
                            <div className="form-check ">
                                <input onClick={deliveryPatiend} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="me-2" className="form-check-label" for="flexRadioDefault1">
                                    হ্যা
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="ms-3" onClick={notdeliveryPatiend} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                <label className="form-check-label" for="flexRadioDefault2">
                                    না
                                </label>
                            </div>
                        </div>

                        {deliverycon && <> <h5>হিমোগ্লোবিন পয়েন্ট<span style={{color:"red"}}> *</span>  </h5>
                            <input onChange={postHimoglobin} placeholder="ডেলিভারির রুগীর ক্ষেত্রে" style={{ width: "95%", padding: "8px", marginBottom: "20px" }} type="text" name="time" /></>}
                        <h5>সময়<span style={{color:"red"}}> *</span>  </h5><span>(কোন সময়ে রক্ত প্রয়োজন)</span>
                        <input  required onChange={postTime} style={{ width: "95%", padding: "8px", marginBottom: "20px" }} type="time" name="time" />
                        <h5>তারিখ<span style={{color:"red"}}> *</span></h5>
                        <input required onChange={postDate} style={{ width: "95%", padding: "8px", marginBottom: "20px" }} type="date" name="date" />
                        <h5>জেলা<span style={{color:"red"}}> *</span> </h5>
                        <select required onChange={postDistrict} style={{ width: "95%", padding: "8px", marginBottom: "20px" }} className="custom-select" id="inputGroupSelect01">
                            <option disabled selected>জেলা বাছাই করুন</option>
                            <option value="চট্রগ্রাম">চট্রগ্রাম</option>
                            <option value="বরিশাল">বরিশাল</option>
                            <option value="ঢাকা">ঢাকা</option>
                            <option value="খুলনা">খুলনা</option>
                            <option value="ময়মনসিংহ">ময়মনসিংহ</option>
                            <option value="রাজশাহী">রাজশাহী</option>
                            <option value="রঙ্গপুর">রঙ্গপুর</option>
                            <option value="সিলেট">সিলেট</option>
                        </select>
                        <h5>স্থান/ঠিকানা<span style={{color:"red"}}> *</span></h5>

                        <input required onChange={postAddress} placeholder="(অবশ্যই হাসপাতালের নাম উল্লেখ করবেন)" style={{ width: "95%", padding: "8px", marginBottom: "20px" }} type="location" name="abc" />
                        <h5>যোগাযোগ<span style={{color:"red"}}> *</span></h5>
                        <input required onChange={postContact} style={{ width: "95%", padding: "8px", marginBottom: "20px" }} type="number"
                        placeholder='নাম্বার দিন'  name="number" />
                        <h5>রেফারেন্স</h5>
                        <input onChange={postRefferance} style={{ width: "95%", padding: "8px", marginBottom: "20px" }} type="text" name="a" />
                        <h5>ই-মেইল</h5>
                        <input onChange={postEmail} placeholder="যদি থাকে" style={{ width: "95%", padding: "8px", marginBottom: "20px" }} type="email" name="email" />
                        {!wait && <button type='submit' className="post-button" style={{ width: "95%", padding: "8px", marginBottom: "20px" }}>সাবমিট পোস্ট</button>}
                        {wait && <div style={{backgroundColor:"#39b54a",
                        textAlign:"center",
                     width: "95%", padding: "8px", marginBottom: "20px"}}>
                            <div style={{color:"white"}} class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div></div>}
                    </form>
      
                </div>
            </div>
           
        </div>

    );
};

export default PostBlood;