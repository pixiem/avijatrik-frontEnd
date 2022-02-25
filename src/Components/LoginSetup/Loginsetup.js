import React from 'react';
import "./PostBlood.css"
const Loginsetup = () => {
    return (
		<div className="row d-flex justify-content-center">
		<div className="col-md-6 col-sm-10 col-xs-6 shadow m-5 p-5" >
			<div className="d-flex flex-column mb-5"> <h1 className="text-center decoration">রক্তের জন্য আবেদন করুন</h1>
				<span className="text-center "> সাবমিট করার ৫ মিনিটের মধ্যেই আপনার পোস্ট টি লাইভ হবে </span> </div>
			<form action="" className="ms-3">
				<h5>নাম*</h5>
				<input placeholder="আপনার নাম" style={{ width: "95%", padding: "8px", marginBottom: "20px" }} type="text" name="name" />
				<h5>রক্তের গ্রুপ* </h5>
				<select style={{ width: "95%", padding: "8px", marginBottom: "20px" }} className="custom-select" id="inputGroupSelect01">
					<option>গ্রুপ সিলেক্ট করুন</option>
					<option value="1">A+</option>
					<option value="2">A-</option>
					<option value="3">B+</option>
					<option value="4">B-</option>
					<option value="5">O-</option>
					<option value="6">O-</option>
					<option value="7">AB-</option>
					<option value="8">AB-</option>
				</select>
				<h5> রুগীর সমস্যা*  </h5>
				<input placeholder="সংক্ষিপ্ত ভাবে বর্ণনা দিন" style={{ width: "95%", height: "80px", padding: "8px", marginBottom: "20px" }} type="text" name="time" />
				<h5>ডেলিভারির রুগী?*</h5>
				<div className="d-flex mb-4 pt-3">
					<div className="form-check ">
						
						<label className="me-2" className="form-check-label" for="flexRadioDefault1">
							হ্যা
						</label>
					</div>
					<div className="form-check">
						
						<label className="form-check-label" for="flexRadioDefault2">
							না
						</label>
					</div>
				</div>

				
				<h5>সময়*  </h5><span>(কোন সময়ে রক্ত প্রয়োজন)</span>
				<input style={{ width: "95%", padding: "8px", marginBottom: "20px" }} type="time" name="time" />
				<h5>তারিখ*</h5>
				<input style={{ width: "95%", padding: "8px", marginBottom: "20px" }} type="date" name="date" />
				<h5>জেলা* </h5>
				<select style={{ width: "95%", padding: "8px", marginBottom: "20px" }} className="custom-select" id="inputGroupSelect01">
					<option disabled selected>জেলা বাছাই করুন</option>
					<option value="Barishal">চট্রগ্রাম</option>
					<option value="Chattogram">্বরিশাল</option>
					<option value="Dhaka">ঢাকা</option>
					<option value="Khulna">খুলনা</option>
					<option value="Mymensingh">ময়মনসিংহ</option>
					<option value="Rajshahi">রাজশাহী</option>
					<option value="Rangpur">রঙ্গপুর</option>
					<option value="Sylhet">সিলেট</option>
				</select>
				<h5>স্থান/ঠিকানা*</h5>

				<input placeholder="(অবশ্যই হাসপাতালের নাম উল্লেখ করবেন)" style={{ width: "95%", padding: "8px", marginBottom: "20px" }} type="location" name="name" />
				<h5>যোগাযোগ*</h5>
				<input style={{ width: "95%", padding: "8px", marginBottom: "20px" }} type="" name="number" />
				<h5>রেফারেন্স</h5>
				<input style={{ width: "95%", padding: "8px", marginBottom: "20px" }} type="text" name="name" />
				<h5>ই-মেইল</h5>
				<input placeholder="যদি থাকে" style={{ width: "95%", padding: "8px", marginBottom: "20px" }} type="email" name="email" />
				<button className="post-button" style={{ width: "95%", padding: "8px", marginBottom: "20px" }}>সাবমিট পোস্ট</button>
			</form>
		</div>
	</div>
    );
};

export default Loginsetup;