// Create the login function here.
function Login() 
{
    player_name = document.getElementById("playername").vlaue;
    localStorage.setItem("player_name" , player_name);

    window.location = "gamepage.html";
}