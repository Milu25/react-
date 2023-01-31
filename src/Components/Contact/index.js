import React from 'react';
import { Contacts, Contactstit, Contactform, Contactinpt, Contactinpf, Contactinpe 
    , Contactsub, Contacttexa, Contactinps, Contactspa
} from './style';
import Footer from '../Footer';
const Contact = () => {
    return<React.Fragment>  
    <Contacts>
              <div className="container">
                <Contactstit><Contactspa>Drop </Contactspa>Me A line</Contactstit>
                 <Contactform>
                   <Contactinpf>
                    <Contactinpt type="text" placeholder="Your Name" />
                    <Contactinpe type="email" placeholder="Your Email" />
                    </Contactinpf>
                <Contactsub  type="text" placeholder="Your Subject" />
                <Contacttexa cols="30" rows="10" placeholder="Your Message" />
                <Contactinps type="submit" value="Send Message" />
                </Contactform>
                </div>
            </Contacts>;
            <Footer />
         </React.Fragment>
}
export default Contact;