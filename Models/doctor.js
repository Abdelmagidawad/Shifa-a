export class Doctor {
  constructor(
    firstName,
    lastName,
    gender,
    specialty,
    phoneNumber,
    email,
    yearsOfExperience = 0,
    totalRating = 0,
    numOfReviews = 0,
    id = null
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.specialty = specialty;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.yearsOfExperience = yearsOfExperience;
    this.totalRating = totalRating;
    this.numOfReviews = numOfReviews;
  }
}
