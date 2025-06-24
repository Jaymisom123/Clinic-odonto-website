import React from 'react';
import icon from '../../assets/banner/icons/Calling.png';
import './ContactForm.scss';

const ContactForm = () => {
    return (
        <form>
            <div className="row">
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>Nome Completo</label>
                        <input type="text" class="form-control" placeholder="Digite seu nome completo..." />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>Endereço de E-mail</label>
                        <input type="email" class="form-control" placeholder="Digite seu e-mail..." />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>Serviço</label>
                        <select class="form-control">
                            <option>Aparelho Ortodôntico</option>
                            <option>Aparelho Ortopédico</option>
                            <option>Atendimento TEA/TDAH/TOD</option>
                            <option>Clareamento</option>
                            <option>Implantes</option>
                            <option>Limpeza/Raspagem</option>
                            <option>Placa para Bruxismo</option>
                            <option>Próteses</option>
                            <option>Remoção de Sisos</option>
                            <option>Tratamento de Canal</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>Especialidade</label>
                        <select class="form-control">
                            <option>Selecionar Especialidade</option>
                            <option>Dra. Alba - Harmonização Orofacial</option>
                            <option>Dra. Isabela - Ortodontia</option>
                            <option>Dr. Juliano - Implantodontia</option>
                            <option>Dra. Bruna - Endodontia</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Mensagem</label>
                        <textarea class="form-control" placeholder='Digite sua mensagem...' rows="3"></textarea>
                    </div>
                </div>

                <div className="col-lg-6">
                    <button type="submit" class="btn appointment-btn">Enviar Mensagem</button>
                </div>
                <div className="col-lg-6">
                    <div className="appointment-call">
                        <div className='icon'>
                            <img src={icon} alt="icon" />
                        </div>
                        <div className='call-text'>
                            <p>Urgência Odontológica 24H</p>
                            <h6>(64) 98145-7994</h6>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;