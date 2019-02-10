var user = {
"user": {
 "name": "Kat",
 "image": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200",
 "full-name" : "Katherine Vicks",
 "phone" : "416-382-3820",
 "city" : "Toronto, ON",
 "email" : "kat@myemail.com",
 "street" : "34 Leval St, M63 3N2",
 "description" : "Strong user experience (UX) design skills. Experience in user research and interaction design gained through corporate and nonprofit externships. Completed three externships during summer breaks to gain experience in UX design and information architecture. Excels at managing usability testing for XYZ landing pages in preparation for Web site redesign. Very competent in testing parameters, prepared prototypes, recruited users, facilitated tests and reported results."
 }
}

var userName = document.getElementById('user-name');
userName.innerHTML = user['user']['full-name'];

var userHandle = document.getElementById("user-handle");
userHandle.innerHTML = user.user.name;

var userLocation = document.getElementById("user-location");
userLocation.innerHTML = user.user.city;

var userImage = document.getElementById( "user-image" ).setAttribute( 'src' , user.user.image );

var userPhone = document.getElementById("user-phone");
userPhone.innerHTML = user.user.phone;

var userAddress = document.getElementById("user-address");
userAddress.innerHTML = user.user.street;

var userEmail = document.getElementById("user-email");
userEmail.innerHTML = user.user.email;

var userDescription = document.getElementById("user-description");
userDescription.innerHTML = user.user.description;