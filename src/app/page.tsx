'use client'

import { useState, useEffect } from 'react'

export default function MandarinPage() {
  const [typedText, setTypedText] = useState('')
  const fullText = 'Сочные мандарины — вкус солнечного лета круглый год'
  const [currentFactIndex, setCurrentFactIndex] = useState(0)

  const facts = [
    'Мандарины содержат более 80% суточной нормы витамина C',
    'Родина мандаринов — древний Китай и Индия',
    'В мире существует более 200 сортов мандаринов',
    'Аромат мандарина снижает стресс и улучшает настроение',
    'Мандарины на 85% состоят из воды'
  ]

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [typedText, fullText])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % facts.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-amber-300 to-yellow-200 animate-gradient">
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease infinite;
        }
      `}</style>

      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="text-3xl font-bold text-white drop-shadow-lg">🍊 MandarinWorld</div>
          <ul className="hidden md:flex gap-8 text-white font-medium">
            <li className="hover:scale-110 transition-transform cursor-pointer">О мандаринах</li>
            <li className="hover:scale-110 transition-transform cursor-pointer">Сорта</li>
            <li className="hover:scale-110 transition-transform cursor-pointer">Польза</li>
            <li className="hover:scale-110 transition-transform cursor-pointer">Контакты</li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="container mx-auto px-4 py-20 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl mb-8 min-h-[120px] md:min-h-[160px]">
            {typedText}
            <span className="animate-pulse">|</span>
          </h1>
          <p className="text-xl md:text-2xl text-orange-900 mb-12 max-w-3xl mx-auto">
            Откройте для себя удивительный мир сладких и ароматных мандаринов
          </p>
          <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:scale-105 hover:shadow-3xl transition-all duration-300">
            Узнать больше
          </button>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-8 text-center">
              Знаете ли вы?
            </h2>
            <div className="text-xl md:text-2xl text-gray-700 text-center min-h-[80px] flex items-center justify-center transition-all duration-500">
              {facts[currentFactIndex]}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="text-6xl mb-4">🍊</div>
              <h3 className="text-2xl font-bold text-orange-600 mb-4">Абхазские</h3>
              <p className="text-gray-700">
                Сладкие, сочные мандарины с тонкой кожурой. Идеальны для свежего употребления и соков.
              </p>
            </article>

            <article className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="text-6xl mb-4">🍊</div>
              <h3 className="text-2xl font-bold text-orange-600 mb-4">Клементины</h3>
              <p className="text-gray-700">
                Гибрид мандарина и апельсина. Без косточек, очень сладкие и ароматные.
              </p>
            </article>

            <article className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="text-6xl mb-4">🍊</div>
              <h3 className="text-2xl font-bold text-orange-600 mb-4">Танжерины</h3>
              <p className="text-gray-700">
                Яркий вкус с легкой кислинкой. Богаты антиоксидантами и витаминами.
              </p>
            </article>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-orange-500 to-amber-400 rounded-3xl shadow-2xl p-8 md:p-16 text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
              Польза мандаринов
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="text-4xl">💪</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Укрепляют иммунитет</h4>
                  <p className="text-orange-50">Высокое содержание витамина C помогает организму бороться с инфекциями</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-4xl">❤️</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Здоровое сердце</h4>
                  <p className="text-orange-50">Калий и антиоксиданты поддерживают работу сердечно-сосудистой системы</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-4xl">✨</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Красивая кожа</h4>
                  <p className="text-orange-50">Витамины A и C способствуют выработке коллагена и здоровью кожи</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-4xl">🧠</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Улучшают настроение</h4>
                  <p className="text-orange-50">Аромат и вкус мандаринов повышают уровень серотонина</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-8 text-center">
              Подпишитесь на новости
            </h2>
            <p className="text-gray-700 text-center mb-8">
              Получайте свежие рецепты, советы по выбору мандаринов и специальные предложения
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-6 py-4 rounded-full border-2 border-orange-300 focus:border-orange-500 focus:outline-none text-gray-700"
              />
              <button
                type="submit"
                className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition-colors duration-300"
              >
                Подписаться
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-orange-900/80 backdrop-blur-sm text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">🍊 MandarinWorld</h3>
              <p className="text-orange-200">
                Всё о мандаринах: сорта, польза, рецепты и интересные факты
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Навигация</h4>
              <ul className="space-y-2 text-orange-200">
                <li className="hover:text-white cursor-pointer transition-colors">О проекте</li>
                <li className="hover:text-white cursor-pointer transition-colors">Статьи</li>
                <li className="hover:text-white cursor-pointer transition-colors">Рецепты</li>
                <li className="hover:text-white cursor-pointer transition-colors">Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-orange-200">
                <li>Email: info@mandarinworld.ru</li>
                <li>Телефон: +7 (999) 123-45-67</li>
                <li>Москва, ул. Солнечная, 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-orange-700 pt-8 text-center text-orange-200">
            <p>&copy; 2024 MandarinWorld. Все права защищены. Создано с любовью к мандаринам 🍊</p>
          </div>
        </div>
      </footer>
    </div>
  )
}