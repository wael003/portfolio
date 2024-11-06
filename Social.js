 import profileData from "../Data/profileData";
 import "../index.css";

 const Social = ()=>{
    return(
        <div className="social">
            <h2>Communecations</h2>
            <div className="linkat">
            
            <a href="https://www.facebook.com"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://www.twitter.com"><i class="fa-brands fa-square-x-twitter"></i></a>
            <a href="https://www.linkedin.com"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://www.instagram.com"><i class="fa-brands fa-square-instagram"></i></a>
               
                {/* {
                    profileData.map((profile) => {return <SocialPro pro = {profile}/>})
                } */}
            </div>
        </div>
    );
 }
//  const SocialPro = (props)=>{
//     let {link , image} = props.pro;
//     return(
//         <a href={link}><img src={image} alt="linkat"></img></a>
//     );
//  } 
 export default Social;