import MeetupItem from '../components/meetups/MeetupItem';

const PRODUCT_LISTS = [
  {
    product_id: 1,
    product_name: "TIE-DYE MULTIFUNCTION WATCH",
    product_img:
      "https://d1rkccsb0jf1bk.cloudfront.net/products/100040547/main/medium/1513822_LRG_rgb_Web.jpg",
    product_price: 46,
  },
  {
    product_id: 2,
    product_name: "GC CERAMIC CHRONOGRAPH WATCH",
    product_img: "https://d1rkccsb0jf1bk.cloudfront.net/products/100040549/main/medium/1513825_LRG_rgb_Web.jpg",
    product_price: 48,
  },
  {
    product_id: 3,
    product_name: "GC CERAMIC CHRONOGRAPH WATCH",
    product_img:
      "https://d1rkccsb0jf1bk.cloudfront.net/products/100040543/main/medium/1502587_FRONT_1_1.jpg",
    product_price: 88,
  },
  {
    product_id: 4,

    product_name: "GC ANALOGUE WATCH CRYSTALS",
    product_img:
      "https://d1rkccsb0jf1bk.cloudfront.net/products/100040548/main/medium/1513823_FRONT_1_1.jpg",
    product_price: 95,
  },
  {
    product_id: 5,

    product_name: "GC ANALOGUE WATCH CRYSTALS",
    product_img: "https://d1rkccsb0jf1bk.cloudfront.net/products/100040550/main/medium/1513850_FRONT_1_1.jpg",
    product_price: 57,
  },
  {
    product_id: 6,

    product_name: "ANALOGUE WATCH",
    product_img:
      "https://d1rkccsb0jf1bk.cloudfront.net/products/100037978/main/medium/1502556_FRONT_1_1.jpg",
    product_price: 265,
  },
  {
    product_id: 7,

    product_name: "CRYSTAL ANALOGUE WATCH",
    product_img:
      "https://d1rkccsb0jf1bk.cloudfront.net/products/100037979/main/medium/1502557_FRONT_1_1.jpg",
    product_price: 214,
  },
  {
    product_id: 8,

    product_name: "LEATHER ANALOGUE WATCH",
    product_img:
      "https://d1rkccsb0jf1bk.cloudfront.net/products/100037980/main/medium/1502558_FRONT_1_1.jpg",
    product_price: 181,
  },
  {
    product_id: 9,

    product_name: "MULTI-FUNCTION CRYSTAL WATCH",
    product_img:
      "https://d1rkccsb0jf1bk.cloudfront.net/products/100040542/main/medium/1502586_FRONT_1_1.jpg",
    product_price: 162,
  },
  {
    product_id: 10,
    product_name: "LOGO DIGITAL WATCH",
    product_img:
      "https://d1rkccsb0jf1bk.cloudfront.net/products/100040544/main/medium/1502588_FRONT_1_1.jpg",
    product_price: 140,
  },
  {
    product_id: 11,
    product_name: "Ladies BOSS New Chain Watch 1502590",
    product_img:
      "https://d1rkccsb0jf1bk.cloudfront.net/products/100040545/main/medium/1502590_FRONT_1_1.jpg",
    product_price: 140,
  },
  {
    product_id: 12,
    product_name: "Hugo Boss Watch 1502588",
    product_img:
      "https://d1rkccsb0jf1bk.cloudfront.net/products/100040546/main/medium/1502591_FRONT_1_1.jpg",
    product_price: 140,
  },
];

function HomePage(props) {
  return <MeetupItem meetups={props.meetups} />;
}

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: PRODUCT_LISTS
    },
    revalidate: 1
  }; 
}

export default HomePage;
