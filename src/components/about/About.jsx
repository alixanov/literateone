import React from 'react'
import imgTwo from "../../assets/img2.png"

const About = () => {
  return (
    <section style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3rem',
      background: '#f9f9f9'
    }}>
      <div style={{ maxWidth: '1000px', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>

        {/* Изображение */}
        <div style={{ flex: '1 1 40%', textAlign: 'center' }}>
          <img
            src={imgTwo}
            alt="Mediasavodxonlik haqida"
            style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
          />
        </div>

        {/* Текст */}
        <div style={{ flex: '1 1 60%' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#16213e' }}>
            Biz haqimizda
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#333' }}>
            Namangan davlat texnika universiteti mediasavodxonlik portali —
            zamonaviy axborot texnologiyalari va media ta’limi yo‘nalishida
            ilg‘or ta’lim va tadqiqotlar markazi.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#333' }}>
            Portal foydalanuvchilarga media savodxonlik bo‘yicha resurslar,
            kurslar, testlar va amaliy mashg‘ulotlarni taqdim etadi.
            Maqsad — yoshlar va mutaxassislar uchun axborot oqimida
            to‘g‘ri yo‘nalish berish, huquqiy va texnik bilimlarni mustahkamlash.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
