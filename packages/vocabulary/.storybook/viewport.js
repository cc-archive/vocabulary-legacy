// Configuration of addon-viewport

export default {
  // Mobiles
  ClassicPhone: {
    name: 'Classic phone',
    styles: {
      width: '320px',
      height: '480px'
    },
    type: 'mobile'
  },
  iPhoneSE: {
    name: 'Apple iPhone SE',
    styles: {
      width: '320px',
      height: '568px',
      borderTopWidth: '95px',
      borderBottomWidth: '95px',
      borderLeftWidth: '12.5px',
      borderRightWidth: '12.5px',
      borderRadius: '55px'     
    },
    type: 'mobile'
  },
  Note9: {
    name: 'Samsung Galaxy Note 9',
    styles: {
      width: '360px',
      height: '740px',
      borderTopWidth: '35px',
      borderBottomWidth: '25px',
      borderLeftWidth: '7.5px',
      borderRightWidth: '7.5px',
      borderRadius: '25px'
    },
    type: 'mobile'
  },
  iPhone6: {
    name: 'Apple iPhone 6',
    styles: {
      width: '375px',
      height: '667px',
      borderTopWidth: '95px',
      borderBottomWidth: '95px',
      borderLeftWidth: '12.5px',
      borderRightWidth: '12.5px',
      borderRadius: '55px'     
    },
    type: 'mobile'
  },
  iPhone11Pro: {
    name: 'Apple iPhone 11 Pro',
    styles: {
      width: '375px',
      height: '812px',
      paddingTop: '20px',
      borderWidth: '20px',
      borderRadius: '50px'     
    },
    type: 'mobile'
  },
  GooglePixel3: {
    name: 'Google Pixel 3',
    styles: {
      width: '412px',
      height: '824px',
      borderTopWidth: '70px',
      borderBottomWidth: '70px',
      borderLeftWidth: '20px',
      borderRightWidth: '20px',
      borderRadius: '60px'
    },
    type: 'mobile'
  },
  iPhone11: {
    name: 'Apple iPhone 11',
    styles: {
      width: '414px',
      height: '896px',
      paddingTop: '20px',
      borderWidth: '20px',
      borderRadius: '50px' 
    },
    type: 'mobile'
  },
  iPhone11ProMax: {
    name: 'Apple iPhone 11 Pro Max',
    styles: {
      width: '414px',
      height: '896px',
      paddingTop: '20px',
      borderWidth: '20px',
      borderRadius: '50px' 
    },
    type: 'mobile'
  },

  // Tablets
  ClassicTablet: {
    name: 'Classic tablet',
    styles: {
      width: '600px',
      height: '800px'
    },
    type: 'tablet'
  },
  iPadMini: {
    name: 'Apple iPad Mini 7.9"',
    styles: {
      width: '768px',
      height: '1024px',
      borderTopWidth: '90px',
      borderBottomWidth: '90px',
      borderLeftWidth: '20px',
      borderRightWidth: '20px',
      borderRadius: '55px'     
    },
    type: 'tablet'
  },
  iPad: {
    name: 'Apple iPad 10.2"',
    styles: {
      width: '810px',
      height: '1080px',
      borderTopWidth: '85px',
      borderBottomWidth: '85px',
      borderLeftWidth: '20px',
      borderRightWidth: '20px',
      borderRadius: '45px'
    },
    type: 'tablet'
  },
  iPadAir: {
    name: 'Apple iPad Air 10.5"',
    styles: {
      width: '834px',
      height: '1112px',
      borderTopWidth: '85px',
      borderBottomWidth: '85px',
      borderLeftWidth: '20px',
      borderRightWidth: '20px',
      borderRadius: '45px'
    },
    type: 'tablet'
  },
  iPadPro11: {
    name: 'Apple iPad Pro 11"',
    styles: {
      width: '834px',
      height: '1194px',
      paddingTop: '20px',
      borderWidth: '20px',
      borderRadius: '50px' 
    },
    type: 'tablet'
  },
  iPadPro13: {
    name: 'Apple iPad Pro 12.9"',
    styles: {
      width: '1024px',
      height: '1366px',
      paddingTop: '17.5px',
      borderWidth: '17.5px',
      borderRadius: '25px' 
    },
    type: 'tablet'
  },

  // Desktops
  ClassicDesktop: {
    name: 'Classic desktop',
    styles: {
      width: '1024px',
      height: '768px'
    },
    type: 'monitor'
  },
  AsusChromebook: {
    name: 'Asus Chromebook',
    styles: {
      width: '1280px',
      height: '800px', 
      borderTopWidth: '25px',
      borderBottomWidth: '75px',
      borderLeftWidth: '25px',
      borderRightWidth: '25px',
      borderRadius: '10px'
    },
    type: 'monitor'
  },
  MacBookPro12: {
    name: 'Apple MacBook Pro 12"',
    styles: {
      width: '1280px',
      height: '800px',
      borderTopWidth: '35px',
      borderBottomWidth: '35px',
      borderLeftWidth: '20px',
      borderRightWidth: '20px',
      borderRadius: '30px'
    },
    type: 'monitor'
  },
  AcerChromebook: {
    name: 'Acer Chromebook',
    styles: {
      width: '1366px',
      height: '768px',
      borderTopWidth: '45px',
      borderBottomWidth: '65px',
      borderLeftWidth: '40px',
      borderRightWidth: '40px',
      borderRadius: '10px'
    },
    type: 'monitor'
  },
  MacBookPro15: {
    name: 'Apple MacBook Pro 15"',
    styles: {
      width: '1440px',
      height: '900px',
      borderTopWidth: '25px',
      borderBottomWidth: '25px',
      borderLeftWidth: '15px',
      borderRightWidth: '15px',
      borderRadius: '20px'
    },
    type: 'monitor'
  },
  MacBookPro16: {
    name: 'Apple MacBook Pro 16"',
    styles: {
      width: '1536px',
      height: '960px',
      borderTopWidth: '25px',
      borderBottomWidth: '25px',
      borderLeftWidth: '15px',
      borderRightWidth: '15px',
      borderRadius: '20px'
    },
    type: 'monitor'
  },
  DellXPS13: {
    name: 'Dell XPS 13',
    styles: {
      width: '1920px',
      height: '1080px',
      borderTopWidth: '20px',
      borderBottomWidth: '75px',
      borderLeftWidth: '20px',
      borderRightWidth: '20px',
      borderRadius: '20px'
    },
    type: 'monitor'
  },
  SurfaceProX: {
    name: 'Microsoft Surface Pro X',
    styles: {
      width: '2880px',
      height: '1920px',
      borderTopWidth: '70px',
      borderBottomWidth: '70px',
      borderLeftWidth: '25px',
      borderRightWidth: '25px',
      borderRadius: '35px'
    },
    type: 'monitor'
  },
  SurfaceBook213: {
    name: 'Microsoft Surface Book 2 13.5"',
    styles: {
      width: '3000px',
      height: '2000px',
      borderWidth: '52.5px',
      borderRadius: '22.5px' 
    },
    type: 'monitor'
  },
  SurfaceBook215: {
    name: 'Microsoft Surface Book 2 15"',
    styles: {
      width: '3240px',
      height: '2160px',
      borderWidth: '52.5px',
      borderRadius: '22.5px'
    },
    type: 'monitor'
  }
}
