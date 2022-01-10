import React from 'react';
import { StyleSheet, View, Text, Dimensions,  } from 'react-native';
let selectedKeys;
let fontSize = {
    '380': 
        {
            XXXSM: 8,
            XXSM: 10,
            11: 11,
            XSM: 12,
            SM: 14,
            
            SMD: 15,
            MD: 16,
            MDL: 17,
        
            LG: 18,
            XLG: 20,
            XXLG: 22,
            XXXLG: 24,
        },

    default: {
        XXXSM: 8,
        XXSM: 10,
        11: 11,
        XSM: 12,
        SM: 14,
        
        SMD: 15,
        MD: 16,
        MDL: 17,
    
        LG: 18,
        XLG: 20,
        XXLG: 22,
        XXXLG: 24,
    },
    
    //'development': developmentKeys
  };
  if (Dimensions.get('window').width<380){
    console.log(Dimensions.get('window').width)
    selectedKeys = fontSize['380'];
}
  export const FONTSIZE = selectedKeys;

// export const WindowDimensions = ()=>{
//     if (useWindowDimensions().width<380)
//     fontSize = {
//         XXXSM: 8,
//         XXSM: 10,
//         11: 11,
//         XSM: 12,
//         SM: 14,
        
//         SMD: 15,
//         MD: 16,
//         MDL: 17,
    
//         LG: 18,
//         XLG: 20,
//         XXLG: 22,
//         XXXLG: 24,
//     }
// else
// fontSize = {
//     XXXSM: 8,
//     XXSM: 10,
//     11: 11,
//     XSM: 12,
//     SM: 14,
    
//     SMD: 15,
//     MD: 16,
//     MDL: 17,

//     LG: 18,
//     XLG: 20,
//     XXLG: 22,
//     XXXLG: 24,
// }
//     // fontSize = {
//     //     HEADING: 14,
//     //     SUB_HEADING: 12,
//     //     TOP_BAR_TITLE: 16,
//     //     PARAGRAPH: 11,
//     //     TITLE: 14,
//     //     SUBTITLE: 12,
//     // }
// }

// export const FONTSIZE = WindowDimensions;