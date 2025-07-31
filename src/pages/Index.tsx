import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const popularSlots = [
    {
      id: 1,
      name: "Golden Crown",
      category: "Классические",
      jackpot: "2,500,000₽",
      image: "img/72e5efb5-7d96-45ad-a7d3-e822244f0382.jpg",
      isHot: true,
    },
    {
      id: 2,
      name: "Royal Roulette",
      category: "Рулетка",
      jackpot: "1,800,000₽",
      image: "img/ff17490d-4963-4a84-aab3-c70ab8580010.jpg",
      isNew: true,
    },
    {
      id: 3,
      name: "Diamond Rush",
      category: "Видео слоты",
      jackpot: "3,200,000₽",
      image: "img/72e5efb5-7d96-45ad-a7d3-e822244f0382.jpg",
      isHot: true,
    },
    {
      id: 4,
      name: "Lucky Seven",
      category: "Классические",
      jackpot: "950,000₽",
      image: "img/72e5efb5-7d96-45ad-a7d3-e822244f0382.jpg",
      isNew: false,
    },
    {
      id: 5,
      name: "Black Jack Premium",
      category: "Карточные",
      jackpot: "1,500,000₽",
      image: "img/ff17490d-4963-4a84-aab3-c70ab8580010.jpg",
      isHot: false,
    },
    {
      id: 6,
      name: "Vegas Nights",
      category: "Видео слоты",
      jackpot: "2,100,000₽",
      image: "img/72e5efb5-7d96-45ad-a7d3-e822244f0382.jpg",
      isNew: true,
    },
  ];

  const categories = [
    { name: "Слоты", count: 450, icon: "Dice6" },
    { name: "Рулетка", count: 28, icon: "CircleDot" },
    { name: "Карточные", count: 85, icon: "Spade" },
    { name: "Live Casino", count: 120, icon: "Video" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-casino-black via-casino-dark to-casino-black">
      {/* Header */}
      <header className="bg-casino-black/80 backdrop-blur-sm border-b border-gold/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon name="Crown" className="text-gold w-8 h-8" />
            <h1 className="text-2xl font-bold text-gold font-['Montserrat']">
              PREMIUM CASINO
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-gold transition-colors">
              Игры
            </a>
            <a href="#" className="text-white hover:text-gold transition-colors">
              Турниры
            </a>
            <a href="#" className="text-white hover:text-gold transition-colors">
              Бонусы
            </a>
            <a href="#" className="text-white hover:text-gold transition-colors">
              VIP
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black">
              Войти
            </Button>
            <Button className="bg-gold text-black hover:bg-gold-dark font-semibold">
              Регистрация
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative py-20 px-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('img/b79bcc46-a766-4ea7-8fc8-fa253914fa0f.jpg')` }}
      >
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Icon name="Gem" className="text-gold w-12 h-12 mr-4" />
            <h2 className="text-5xl md:text-7xl font-bold text-white font-['Montserrat']">
              CASINO
            </h2>
            <Icon name="Gem" className="text-gold w-12 h-12 ml-4" />
          </div>
          
          <p className="text-xl text-gold mb-8 max-w-2xl mx-auto">
            Премиальное казино с лучшими играми и максимальными выигрышами
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gold text-black hover:bg-gold-dark font-bold text-lg px-8 py-4">
              <Icon name="Play" className="mr-2 w-5 h-5" />
              Играть сейчас
            </Button>
            <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black font-bold text-lg px-8 py-4">
              <Icon name="Gift" className="mr-2 w-5 h-5" />
              Получить бонус
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-2">5,000,000₽</div>
              <div className="text-white/80">Максимальный джекпот</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-2">500+</div>
              <div className="text-white/80">Игр в каталоге</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-2">24/7</div>
              <div className="text-white/80">Поддержка игроков</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-white mb-12 font-['Montserrat']">
            Категории игр
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category.name} className="bg-casino-dark border-gold/20 hover:border-gold/50 transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <Icon 
                    name={category.icon as any} 
                    className="w-12 h-12 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" 
                  />
                  <h4 className="text-white font-semibold text-lg mb-2">{category.name}</h4>
                  <p className="text-gold text-sm">{category.count} игр</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Slots */}
      <section className="py-16 px-4 bg-casino-dark/50">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-12">
            <Icon name="Star" className="text-gold w-8 h-8 mr-3" />
            <h3 className="text-3xl font-bold text-white font-['Montserrat']">
              Популярные слоты
            </h3>
            <Icon name="Star" className="text-gold w-8 h-8 ml-3" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularSlots.map((slot) => (
              <Card key={slot.id} className="bg-casino-dark border-gold/20 hover:border-gold/50 transition-all duration-300 group cursor-pointer overflow-hidden">
                <div className="relative">
                  <img 
                    src={slot.image} 
                    alt={slot.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 flex gap-2">
                    {slot.isHot && (
                      <Badge className="bg-red-600 text-white">
                        <Icon name="Flame" className="w-3 h-3 mr-1" />
                        HOT
                      </Badge>
                    )}
                    {slot.isNew && (
                      <Badge className="bg-green-600 text-white">
                        <Icon name="Sparkles" className="w-3 h-3 mr-1" />
                        NEW
                      </Badge>
                    )}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-bold text-lg">{slot.name}</h4>
                    <Badge variant="outline" className="border-gold text-gold">
                      {slot.category}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white/80">Джекпот:</span>
                    <span className="text-gold font-bold text-lg">{slot.jackpot}</span>
                  </div>
                  
                  <Button className="w-full bg-gold text-black hover:bg-gold-dark font-semibold">
                    <Icon name="Play" className="mr-2 w-4 h-4" />
                    Играть
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black font-bold">
              Показать все игры
              <Icon name="ArrowRight" className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-white mb-12 font-['Montserrat']">
            Почему выбирают нас
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gold/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Icon name="Shield" className="w-10 h-10 text-gold" />
              </div>
              <h4 className="text-white font-bold text-xl mb-4">Безопасность</h4>
              <p className="text-white/80">
                Лицензированное казино с защищенными транзакциями и честной игрой
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gold/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Icon name="Zap" className="w-10 h-10 text-gold" />
              </div>
              <h4 className="text-white font-bold text-xl mb-4">Быстрые выплаты</h4>
              <p className="text-white/80">
                Мгновенные выводы средств без комиссий и скрытых платежей
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gold/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Icon name="Headphones" className="w-10 h-10 text-gold" />
              </div>
              <h4 className="text-white font-bold text-xl mb-4">Поддержка 24/7</h4>
              <p className="text-white/80">
                Круглосуточная поддержка на русском языке для решения любых вопросов
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-casino-black border-t border-gold/20 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Icon name="Crown" className="text-gold w-8 h-8" />
                <h4 className="text-xl font-bold text-gold font-['Montserrat']">
                  PREMIUM CASINO
                </h4>
              </div>
              <p className="text-white/80 text-sm">
                Премиальное онлайн казино с лучшими играми и максимальными выигрышами.
              </p>
            </div>
            
            <div>
              <h5 className="text-white font-semibold mb-4">Игры</h5>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-gold transition-colors">Слоты</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Рулетка</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Карточные игры</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Live Casino</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-white font-semibold mb-4">Поддержка</h5>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-gold transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Правила</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Ответственная игра</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-white font-semibold mb-4">Контакты</h5>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="w-4 h-4 text-gold" />
                  <span className="text-white/80 text-sm">support@premiumcasino.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="w-4 h-4 text-gold" />
                  <span className="text-white/80 text-sm">+7 (800) 123-45-67</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gold/20 mt-8 pt-8 text-center">
            <p className="text-white/60 text-sm">
              © 2025 Premium Casino. Все права защищены. Лицензия №12345
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;