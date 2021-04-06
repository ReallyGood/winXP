import bliss from '../../../assets/properties/displayProperties/backgrounds/bliss.jpeg';
import reallyGood from '../../../assets/properties/displayProperties/backgrounds/really-good.png';
import autumn from '../../../assets/properties/displayProperties/backgrounds/autumn.jpeg';
import azul from '../../../assets/properties/displayProperties/backgrounds/azul.jpeg';
import ascent from '../../../assets/properties/displayProperties/backgrounds/ascent.jpeg';
import blueLace from '../../../assets/properties/displayProperties/backgrounds/blue-lace-16.jpeg';
import crystal from '../../../assets/properties/displayProperties/backgrounds/crystal.jpeg';
import follow from '../../../assets/properties/displayProperties/backgrounds/follow.jpeg';
import coffeeBean from '../../../assets/properties/displayProperties/backgrounds/coffee-bean.jpeg';

const BG_ENUM_ID = {
  none: 1,
  reallyGood: 2,
  ascent: 3,
  autumn: 4,
  azul: 5,
  bliss: 6,
  blueLace: 7,
  coffeeBean: 8,
  crystal: 9,
  follow: 10,
};

export const backgrounds = [
  { id: BG_ENUM_ID.none, title: '(None)', position: 'cover' },
  {
    id: BG_ENUM_ID.reallyGood,
    title: 'Really Good',
    background: reallyGood,
    position: 'center',
  },
  {
    id: BG_ENUM_ID.ascent,
    title: 'Ascent',
    background: ascent,
    position: 'center',
  },
  {
    id: BG_ENUM_ID.autumn,
    title: 'Autumn',
    background: autumn,
    position: 'center',
  },
  { id: BG_ENUM_ID.azul, title: 'Azul', background: azul, position: 'center' },
  {
    id: BG_ENUM_ID.bliss,
    title: 'Bliss',
    background: bliss,
    position: 'center',
  },
  {
    id: BG_ENUM_ID.blueLace,
    title: 'Blue Lace 16',
    background: blueLace,
    position: 'repeat',
  },
  {
    id: BG_ENUM_ID.coffeeBean,
    title: 'Coffee Bean',
    background: coffeeBean,
    position: 'repeat',
  },
  {
    id: BG_ENUM_ID.crystal,
    title: 'Crystal',
    background: crystal,
    position: 'center',
  },
  {
    id: BG_ENUM_ID.follow,
    title: 'Follow',
    background: follow,
    position: 'center',
  },
];
