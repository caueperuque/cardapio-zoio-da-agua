import { useState } from 'react';
import data from '../../db/data.json';
import './MenuCard.css';
import downArrow from '../../assets/images/down-arrows.png';
import upArrow from '../../assets/images/up-arrows.png';

export default function MenuCard() {
  const [expandedSections, setExpandedSections] = useState({
    isDicaCasaExpanded: false,
    isPorcoesExpanded: false,
    isRefeicoesExpanded: false,
    isExecExpanded: false,
    isPorcoesTresExpanded: false,
    isSobremesasExpanded: false,
    isRefrisSucosExpanded: false,
    isCaipirinhasExpanded: false,
    isCervejasExpanded: false,
    isDosesExpanded: false,
  });

  const toggleSection = (sectionName) => {
    setExpandedSections((prevExpanded) => ({
      ...prevExpanded,
      [sectionName]: !prevExpanded[sectionName],
    }));
  };

  return (
    <div>
      {/* Dica da Casa */}
      <section className='section-container'>
        <div className="section-name">
          <h2>DICAS DA CASA</h2>
          <img
            className="arrow-icon"
            src={expandedSections.isDicaCasaExpanded ? upArrow : downArrow}
            onClick={() => toggleSection('isDicaCasaExpanded')}
          />
        </div>
        {expandedSections.isDicaCasaExpanded && (
          <div className="section-menu">
          {data.find((item) => item.type === 'dica').menus.map(({ name, price, obs }) => (
            <div key={Math.random()} className="menu-item">
              <div className="menu-item__name">
                <h2 className="menu-card__item">{name.toUpperCase()}</h2>
                {obs && <p>{obs}</p>}
              </div>
              <div className="menu-item__content">
                {price.meia ? (
                  <div className='menu-card__container-price'>
                    <p>MEIA (400g)</p>
                    <p className="menu-card__price">{price.meia}</p>
                    <p>INTEIRA (800g)</p>
                    <p className="menu-card__price"> {price.inteira} </p>
                  </div>
                ) : (
                  <div>
                    <p className="menu-card__price">{price}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        )}
      </section>

      {/* PORÇÕES */}
      <section className='section-container'>
        <div className="section-name">
          <h2>PORÇÕES</h2>
          <img
            className="arrow-icon"
            src={expandedSections.isPorcoesExpanded ? upArrow : downArrow}
            onClick={() => toggleSection('isPorcoesExpanded')}
          />
        </div>
        {expandedSections.isPorcoesExpanded && (
          <div className="section-menu">
            {data.find((item) => item.type === 'porcoes').menus.map(({ name, price, obs }) => (
              <div key={Math.random()} className="menu-item">
                <div className="menu-item__name">
                  <h2 className="menu-card__item">{name.toUpperCase()}</h2>
                  {obs && <p>{obs}</p>}
                </div>
                <div className="menu-item__content">
                  {price.meia ? (
                    <div className='menu-card__container-price'>
                      <p>MEIA (400g)</p>
                      <p className="menu-card__price">{price.meia}</p>
                      <p>INTEIRA (800g)</p>
                      <p className="menu-card__price"> {price.inteira} </p>
                    </div>
                  ) : (
                    <div>
                      <p className="menu-card__price">{price}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* REFEIÇÕES COM PEIXE */}
      <section className='section-container'>
        <div className="section-name">
          <h2>REFEIÇÕES COM PEIXE</h2>
          <img
            className="arrow-icon"
            src={expandedSections.isRefeicoesExpanded ? upArrow : downArrow}
            onClick={() => toggleSection('isRefeicoesExpanded')}
          />
        </div>
        {expandedSections.isRefeicoesExpanded && (
          <div className="section-menu">
            {data.find((item) => item.type === 'refeicoes').menus.map(({ name, price, obs }) => (
              <div key={Math.random()} className="menu-item">
                <div className="menu-item__name">
                  <h2 className="menu-card__item">{name.toUpperCase()}</h2>
                  {obs && <p>{obs}</p>}
                </div>
                {price.meia ? (
                  <div className='menu-card__container-price'>
                    <p>MEIA (400g)</p>
                    <p className="menu-card__price">{price.meia}</p>
                    <p>INTEIRA (800g)</p>
                    <p className="menu-card__price">{price.inteira}</p>
                  </div>
                ) : (
                  <div>
                    <p className="menu-card__price">{price}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

            {/* EXECUTIVO INDIVIDUAL */}
            <section className='section-container'>
        <div className="section-name">
          <h2>EXECUTIVO INDIVIDUAL</h2>
          <img
            className="arrow-icon"
            src={expandedSections.isExecExpanded ? upArrow : downArrow}
            onClick={() => toggleSection('isExecExpanded')}
          />
        </div>
        {expandedSections.isExecExpanded && (
          <div className="section-menu">
            {data.find((item) => item.type === 'exec').menus.map(({ name, price, obs, options }) => (
              <div key={Math.random()} className="menu-item">
                <div className="menu-item__name">
                  <h2 className="menu-card__item">{name.toUpperCase()}</h2>
                  {obs && <p>{obs}</p>}
                  <ul>
                    <p>Escolha entre:</p>
                    {options &&
                      options.map((option) => (
                        <li key={Math.random()}>{option}</li>
                      ))}
                  </ul>
                </div>
                {price.meia ? (
                  <div className='menu-card__container-price'>
                    <p>MEIA (400g)</p>
                    <p className="menu-card__price">{price.meia}</p>
                    <p>INTEIRA (800g)</p>
                    {price.inteira}
                  </div>
                ) : (
                  <div>
                    <p className="menu-card__price">{price}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* PORÇÕES PARA TRÊS PESSOAS */}
      <section className='section-container'>
        <div className="section-name">
          <h2>PORÇÕES PARA TRÊS PESSOAS</h2>
          <img
            className="arrow-icon"
            src={expandedSections.isPorcoesTresExpanded ? upArrow : downArrow}
            onClick={() => toggleSection('isPorcoesTresExpanded')}
          />
        </div>
        {expandedSections.isPorcoesTresExpanded && (
          <div className="section-menu">
            {data.find((item) => item.type === 'porcoes_tres').menus.map(({ name, price, obs }) => (
              <div key={Math.random()} className="menu-item">
                <div className="menu-item__name">
                  <h2 className="menu-card__item">{name.toUpperCase()}</h2>
                  {obs && <p>{obs}</p>}
                </div>
                {price.meia ? (
                  <div className='menu-card__container-price'>
                    <p>MEIA (400g)</p>
                    <p className="menu-card__price">{price.meia}</p>
                    <p>INTEIRA (800g)</p>
                    {price.inteira}
                  </div>
                ) : (
                  <div>
                    <p className="menu-card__price">{price}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* SOBREMESAS */}
      <section className='section-container'>
        <div className="section-name">
          <h2>SOBREMESAS</h2>
          <img
            className="arrow-icon"
            src={expandedSections.isSobremesasExpanded ? upArrow : downArrow}
            onClick={() => toggleSection('isSobremesasExpanded')}
          />
        </div>
        {expandedSections.isSobremesasExpanded && (
          <div className="section-menu">
            {data.find((item) => item.type === 'sobremesas').menus.map(({ name, price, obs }) => (
              <div key={Math.random()} className="menu-item">
                <div className="menu-item__name">
                  <h2 className="menu-card__item">{name.toUpperCase()}</h2>
                  {obs && <p>{obs}</p>}
                </div>
                {price.meia ? (
                  <div className='menu-card__container-price'>
                    <p>MEIA (400g)</p>
                    <p className="menu-card__price">{price.meia}</p>
                    <p>INTEIRA (800g)</p>
                    {price.inteira}
                  </div>
                ) : (
                  <div>
                    <p className="menu-card__price">{price}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* REFRIS E SUCOS */}
      <section className='section-container'>
        <div className="section-name">
          <h2>REFRIS E SUCOS</h2>
          <img
            className="arrow-icon"
            src={expandedSections.isRefrisSucosExpanded ? upArrow : downArrow}
            onClick={() => toggleSection('isRefrisSucosExpanded')}
          />
        </div>
        {expandedSections.isRefrisSucosExpanded && (
          <div className="section-menu">
            {data.find((item) => item.type === 'refris_sucos').menus.map(({ name, price, obs }) => (
              <div key={Math.random()} className="menu-item">
                <div className="menu-item__name">
                  <h2 className="menu-card__item">{name.toUpperCase()}</h2>
                  {obs && <p>{obs}</p>}
                </div>
                {price.meia ? (
                  <div className='menu-card__container-price'>
                    <p>MEIA (400g)</p>
                    <p className="menu-card__price">{price.meia}</p>
                    <p>INTEIRA (800g)</p>
                    {price.inteira}
                  </div>
                ) : (
                  <div>
                    <p className="menu-card__price">{price}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CAIPIRINHAS */}
      <section className='section-container'>
        <div className="section-name">
          <h2>CAIPIRINHAS</h2>
          <img
            className="arrow-icon"
            src={expandedSections.isCaipirinhasExpanded ? upArrow : downArrow}
            onClick={() => toggleSection('isCaipirinhasExpanded')}
          />
        </div>
        {expandedSections.isCaipirinhasExpanded && (
          <div className="section-menu">
            {data.find((item) => item.type === 'caipirinhas').menus.map(({ name, price, obs }) => (
              <div key={Math.random()} className="menu-item">
                <div className="menu-item__name">
                  <h2 className="menu-card__item">{name.toUpperCase()}</h2>
                  {obs && <p>{obs}</p>}
                </div>
                {price.meia ? (
                  <div className='menu-card__container-price'>
                    <p>MEIA (400g)</p>
                    <p className="menu-card__price">{price.meia}</p>
                    <p>INTEIRA (800g)</p>
                    {price.inteira}
                  </div>
                ) : (
                  <div>
                    <p className="menu-card__price">{price}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CERVEJAS */}
      <section className='section-container'>
        <div className="section-name">
          <h2>CERVEJAS</h2>
          <img
            className="arrow-icon"
            src={expandedSections.isCervejasExpanded ? upArrow : downArrow}
            onClick={() => toggleSection('isCervejasExpanded')}
          />
        </div>
        {expandedSections.isCervejasExpanded && (
          <div className="section-menu">
            {data.find((item) => item.type === 'cervejas').menus.map(({ name, price, obs }) => (
              <div key={Math.random()} className="menu-item">
                <div className="menu-item__name">
                  <h2 className="menu-card__item">{name.toUpperCase()}</h2>
                  {obs && <p>{obs}</p>}
                </div>
                {price.meia ? (
                  <div className='menu-card__container-price'>
                    <p>MEIA (400g)</p>
                    <p className="menu-card__price">{price.meia}</p>
                    <p>INTEIRA (800g)</p>
                    {price.inteira}
                  </div>
                ) : (
                  <div>
                    <p className="menu-card__price">{price}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* DOSES */}
      <section className='section-container'>
        <div className="section-name">
          <h2>DOSES</h2>
          <img
            className="arrow-icon"
            src={expandedSections.isDosesExpanded ? upArrow : downArrow}
            onClick={() => toggleSection('isDosesExpanded')}
          />
        </div>
        {expandedSections.isDosesExpanded && (
          <div className="section-menu">
            {data.find((item) => item.type === 'doses').menus.map(({ name, price, obs }) => (
              <div key={Math.random()} className="menu-item">
                <div className="menu-item__name">
                  <h2 className="menu-card__item">{name.toUpperCase()}</h2>
                  {obs && <p>{obs}</p>}
                </div>
                {price.meia ? (
                  <div className='menu-card__container-price'>
                    <p>MEIA (400g)</p>
                    <p className="menu-card__price">{price.meia}</p>
                    <p>INTEIRA (800g)</p>
                    {price.inteira}
                  </div>
                ) : (
                  <div>
                    <p className="menu-card__price">{price}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
