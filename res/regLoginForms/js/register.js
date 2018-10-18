function register(){

	var cl = document.getElementById('clg_name').value; //college name
	var m1 = document.getElementById('name1').value; // leader name
	var m2 = document.getElementById('name2').value; //member 2
	var m3 = document.getElementById('name3').value; //member 3
	var m4 = document.getElementById('name4').value; //member 4
	var m1_email = document.getElementById('email').value; // leader email

	var team_id='DVC0001'; // get last teams id 
	//Team id increment part
	var id=Number(team_id.substring(3,7));
	id++;
	var l=id.toString().length;
	var z="";
	for(i=0;i<4-l;i++)z=z+"0";
	team_id="DVC"+z+id;

	//random password
	var pass = Math.random().toString(36).slice(-8);
	//document.write("Team id : ", team_id, " Password: ", pass);
	//send pass and team id to m1_email
}
function signin(){

	var team_id= document.getElementById('team_id').value;
	var pass=document.getElementById('password').value;
}