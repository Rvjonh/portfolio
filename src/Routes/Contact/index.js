import { useState } from 'react';

import './style.scss';
import useScrollTop from './../../Hooks/useScrollTop';
import MainWrap from './../../Components/MainWrap';

import Button from './../../Components/Button';
import Spinner from './../../Components/Spinner';

export default function Contact(){
    useScrollTop();

    return(
        <MainWrap>
            <ContactSections />
        </MainWrap>
    )
}

export function ContactSections(){

    const [email, setEmail] = useState({name:"",email:"", subject:"", message:""})
    const [sendingEmail, setSendingEmail] = useState({state:"waiting"});

    const handleSendEmail = (e)=>{
        e.preventDefault()
        setSendingEmail({state:"sending"})

        fetch(process.env.REACT_APP_EMAIL_SENDER_DOMAIN,{
            method : 'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(email)
        }).then((res)=>{
            setSendingEmail({state:"sent"})
        }).catch(err=>{
            setSendingEmail({state:"error"})
        })
    }

    const handleSetValue = (e)=>{
        setEmail({...email, [e.target.id]: e.target.value})
    }

    return(
    <div className="contact-container">
        <section className='section-contact1'>
            <div className='title-header'>
                <h2 href='#about' className="title-section">Let's talk</h2>
            </div>

            <p className='text'>
                I'm from Venezuela, where I currently live, on the border between Venezuela and Colombia. I know English although it is not my mother tongue, I always like to meet new people through English.
            </p>

            <div className='contact-map'>
                <iframe title="location where I live" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75219.61548765756!2d-72.26356849771608!3d7.763921645931481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e666ca49582d39f%3A0xe35525b271c7ef85!2zU2FuIENyaXN0w7NiYWwsIFTDoWNoaXJh!5e0!3m2!1ses!2sve!4v1662990106002!5m2!1ses!2sve" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
        <section className='section-contact2'>
            <div className='title-header'>
                <h2 href='#about' className="title-section">Contact</h2>
            </div>
            <p className='text'>
                I'm interested in working on medium or small projects, with a team that can share knowledge and expertise to increase our experience day by day. however, if you (pana) have another request or question, do not hesitate to use the form.
            </p>

            <p className="text text-msj">
                Have a question or want to work together?
            </p>

            {sendingEmail.state === 'waiting' &&
                <form className='contact-form' onSubmit={handleSendEmail}>
                    <div>
                        <input value={email.name} onChange={handleSetValue} type="text" id="name" name="name" placeholder="Name" />
                        <input value={email.email} onChange={handleSetValue} type="email" id="email" name="email" placeholder="Enter email" />
                    </div>

                    <input value={email.subject} onChange={handleSetValue} type="text" id="subject" name='subject' placeholder="Subject" />

                    <textarea value={email.message} onChange={handleSetValue} placeholder='Your message' id="message" name='message' rows={20}>

                    </textarea>

                    <div className='button-send-panel'>
                        <Button className="button-send">
                            <span>Send Message</span>
                        </Button>
                    </div>
                </form>
            }

            {sendingEmail.state === 'sending' &&
                <Spinner/>
            }
            <div className='contact-form'>

                {sendingEmail.state === 'sent' &&
                    <p className='text'>😎Email sent: I will answer you as soon as possible 😁</p>
                }

                {sendingEmail.state === 'error' &&
                    <p className='text'>🤔ERROR : I couldn't send your email, please use another resourse to contact me! 😑</p>
                }
            </div>

        </section>
    </div>
    )
}