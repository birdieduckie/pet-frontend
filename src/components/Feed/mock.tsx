import Kitten from 'assets/kitten.jpg'
import Cats from 'assets/cats.jpg'
import Cattato from 'assets/cattato.jpg'
import Catto from 'assets/catto.jpg'

export const mockPosts = [
  {
    id: '0h',
    text: 'Помогите этому котенку найти дом!',
    img: Kitten,
    likes: 15,
    createdAt: new Date().toDateString()
  },
  {
    id: '1h',
    text:
      'Посмотрите, сколько котят! Они родились ' +
      'совсем недавно и им очень нужен дом. Пожалуйста, ' +
      'распространите это фото - вдруг кто-то из ваших друзей ' +
      'захочет приобрести пушистого друга!',
    img: Cats,
    likes: 127485,
    createdAt: new Date('2018-12-02').toDateString()
  },
  {
    id: '2h',
    text: 'Помогите этому котенку найти дом!',
    img: Kitten,
    likes: 15,
    createdAt: new Date('2017-12-13').toDateString()
  },
  {
    id: '3h',
    text: 'Помогите этому котенку найти дом!',
    img: Kitten,
    likes: 15,
    createdAt: new Date('2014-02-17').toDateString()
  },
  {
    id: '4h',
    text: 'Помогите этому котенку найти дом!',
    img: Kitten,
    likes: 15,
    createdAt: new Date('2021-11-17').toDateString()
  },
  {
    id: '5h',
    text: 'Вот это кошька...',
    img: Catto,
    likes: 15,
    createdAt: new Date('2022-06-17').toDateString()
  },
  {
    id: '6h',
    text: 'Помогите этому котенку найти дом!',
    img: Cattato,
    likes: 15,
    createdAt: new Date('2009-01-01').toDateString()
  },
  {
    id: '7h',
    text: 'Помогите этому котенку найти дом!',
    img: Kitten,
    likes: 15,
    createdAt: new Date('2011-12-17').toDateString()
  },
  {
    id: '8h',
    text: 'Помогите этому котенку найти дом!',
    img: Kitten,
    likes: 15,
    createdAt: new Date('2012-06-19').toDateString()
  },
  {
    id: '9h',
    text: 'Помогите этому котенку найти дом!',
    img: Kitten,
    likes: 15,
    createdAt: new Date('2015-10-13').toDateString()
  }
]
