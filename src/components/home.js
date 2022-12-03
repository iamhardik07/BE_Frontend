import './home.css';
import { Link } from 'react-router-dom';
const Home  = () =>{
    return(
        
        <p class="home">
            
            <h1 class="h1">.</h1>
            <h1 class="h1">.</h1>
            <h1 class="h1">.</h1>
            <p class="Contult"> &thinsp;&thinsp;&thinsp;&thinsp;&thinsp; &thinsp;&thinsp; Welcome to Contult...</p>
            <h1>&thinsp; &thinsp; We help you to grow your business.</h1>
            &thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;
            <Link to="/reg"><button type="button" class='button'>Know More!</button></Link>
            
        </p>
        


    )
}

export default Home;