import React, { Fragment } from 'react'

import Layout from '../templates/Layout'
import Container from '../components/Container'
import { withLoginStateContext } from '../contexes/LoginStateContext'

const IndexPage = () => (
  <Layout>
    <Container>
      <section id="yleistä">
        <h1>Mahdollisuus opinto-oikeuteen</h1>
        <p>
          Kevään 2019 aikataulutettu Ohjelmoinnin MOOC antaa mahdollisuuden päästä opiskelemaan Helsingin yliopiston matemaattis-luonnontieteellisen tiedekunnan tietojenkäsittelytieteen kandiohjelmaan. Ohjelmoinnin MOOC -kurssin perusteella haetaan opinto-oikeutta korkeakoulujen yhteishaun osana olevassa päähaussa.
        </p>
        <p>
          Yhteishaun hakuaika on 20.3.-3.4.2019. Hakuaika päättyy klo 15.00. Ohjelmoinnin MOOCin kautta hakiessasi Sinun tulee täyttää päähaun hakulomake, jossa asetat Helsingin yliopiston tietojenkäsittelytieteen ohjelman haluamallesi prioriteetille. Löydät lisätietoja sähköisestä yhteishausta korkeakouluihin <a href="https://opintopolku.fi/" target="_blank">Opintopolku.fi</a>-portaalista.
        </p>
        <p>
          Opinto-oikeuden hakeminen Ohjelmoinnin MOOCin kautta edellyttää osallistumista kevään 2019 aikataulutettuun versioon, tehtävien tekemistä annetussa aikataulussa, sekä osallistumista toukokuussa järjestettävään näyttökokeeseen.
        </p>
        <p>
          Saat kutsun näyttökokeeseen tekemällä aikataulutetun kurssin jokaisesta osasta vähintään 90% saatavissa olevista pisteistä. Pisteiden laskemisessa otetaan huomioon vain ohjelmointitehtävät. Kyselyt tai muu sisältö eivät vaikuta näihin pisteisiin.
        </p>
        <p>
          Ohjelmoinnin MOOCin kautta valitaan 50 opiskelijaa. Voit hakea yhteishaussa korkeakoulupaikkaa myös normaalin valintakokeen kautta sekä ylioppilaskirjoitusten tulosten perusteella. Vaikka et Ohjelmoinnin MOOCin kautta opiskelupaikkaa saisi, voi kurssia ajatella ilmaisena valmennuskurssina yhteishaun normaaliin valintakokeeseen.
        </p>
        <p>
          Yhteishaussa hakemisen edellytyksenä on korkeakoulukelpoisuus ja hakiessasi kevään 2019 haussa oletuksena on, että voit aloittaa opinnot syksyllä 2019. Mikäli olet valmistumassa vasta keväällä 2020, voit hakea opiskelupaikkaa Ohjelmoinnin MOOCin näyttökokeessa vuotta 2020 varten.
        </p>
        <p>
          Helsingin yliopiston tietojenkäsittelytieteen kandiohjelmaan on mahdollista hakea yhteisvalinnan ja MOOCin lisäksi Helsingin yliopiston Avoimen yliopiston kautta sekä Digital Education for All -hankkeen kautta. Lisätietoa näistä seuraavista linkeistä:
        </p>

        <ul>
            <li><a href="https://www.helsinki.fi/fi/avoin-yliopisto/opiskelu/tule-opiskelemaan/tavoitteena-tutkinto" target="_blank">Helsingin yliopiston Avoimen yliopiston väylä</a></li>
            <li><a href="https://www.helsinki.fi/fi/projektit/digital-education-for-all/" target="_blank">Digital Education for All -hanke</a></li>
        </ul>
      </section>
    </Container>
  </Layout>
)

export default withLoginStateContext(IndexPage)
