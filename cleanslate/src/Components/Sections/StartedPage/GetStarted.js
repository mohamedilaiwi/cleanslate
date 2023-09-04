import "./GetStarted.css"
import userImg from "../../../images/SignUp/user-logo.svg";
import emailImg from "../../../images/SignUp/email.svg";
import passwordImg from "../../../images/SignUp/password.svg";

let circleCount = 0;


const StartPage = () => {

    // Generate circles at regular intervals
    setInterval(createAndMoveCircle, 0);

    return (
        <div className="get-started-wrapper">
            <div className="background">
                <div className="card-container">
                    <h1 className="card-header">Start your <span id='card-website-name'>CleanSlate</span> Journey Here!</h1>
                        <div className="username-wrapper form-container">
                            <input className='form-input' id='username' type="text" placeholder="Username" />
                            <img src={userImg} alt="" id="form-image" />
                        </div>
                        <div className="email-wrapper form-container">
                            <input className='form-input' id='email' type="email" placeholder="Email Address" />
                            <img src={emailImg} alt="" id="form-image" />
                        </div>
                        <div className="password-wrapper form-container">
                            <input className='form-input' id='password' type="password" placeholder="Password" />
                            <img src={passwordImg} alt="" id="form-image"/>
                        </div>
                        <button className='form-submit form-container' id='sign-up-btn'>Join CleanSlate</button>

                </div>
            </div>
👤
        </div>
    )
}




// Create and move circles randomly
function createAndMoveCircle() {
    // Track the number of circles created
    if (circleCount >= 15) return; // Limit the number of circles

    const circle = document.createElement("div");
    circle.classList.add("background-circle");
    document.querySelector(".background").appendChild(circle);

    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;

    circle.style.left = `${startX}px`;
    circle.style.top = `${startY}px`;

    const speed = Math.random() * 0.1; // Adjust speed as needed
    const angle = Math.random() * 360; // Random angle in degrees

    // Calculate the horizontal and vertical speed components
    const horizontalSpeed = Math.cos(angle * (Math.PI / 180)) * speed;
    const verticalSpeed = Math.sin(angle * (Math.PI / 180)) * speed;

    // Move the circle randomly
    function moveCircle() {
        const currentX = parseFloat(circle.style.left);
        const currentY = parseFloat(circle.style.top);

        if (
            currentX < 0 ||
            currentY < 0 ||
            currentX > window.innerWidth ||
            currentY > window.innerHeight
        ) {
            // Remove the circle when it goes off-screen
            circle.remove();
            circleCount--;
        } else {
            circle.style.left = `${currentX + horizontalSpeed}px`;
            circle.style.top = `${currentY + verticalSpeed}px`;

            // Request the next animation frame
            requestAnimationFrame(moveCircle);
        }
    }

    // Start moving the circle
    moveCircle();
    circleCount++;
}



export {StartPage};