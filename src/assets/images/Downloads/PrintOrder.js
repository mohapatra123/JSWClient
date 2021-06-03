/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-closing-tag-location */
import { Document, Font, Image, Page, PDFViewer, StyleSheet, Text, View } from '@react-pdf/renderer';
import React, { useEffect, useState } from 'react';
import generalFont from '../../assets/fonts/cargo/Montserrat-Regular.ttf';
import font from '../../assets/fonts/cargo/Oswald-Medium.ttf';
import Logo from '../../assets/images/cargo/LogoColor.png';
import APIURL from '../../constants/apiUrlConstants';
import { request } from '../../utils/axiosUtils';
import ErrorMapping from '../../utils/ErrorMapping';
import '../cargo/css/bootstrap.css';
import '../cargo/css/cargo.css';
import '../cargo/css/media.css';

const JsBarcode = require('jsbarcode');
// const { canvas } = require('canvas');

Font.register({
  family: 'Roboto',
  src: font,
});
Font.register({
  family: 'RobotoFont',
  src: generalFont,
});

const styles = StyleSheet.create({
  page: { width: '100mm', marginTop: '0', paddingLeft: '0' },

  main: {
    width: '100%',
    height: '140mm',
    marginBottom: '15px',
    fontFamily: 'Roboto',
    backgroundColor: '#fff',

    margin: '10 0 ',


  },

  table: { margin: '0 10', border: '2 solid #231f20', height: '140mm' },
  mainSec: {

    fontFamily: 'Roboto',
    width: '100%',


  },
  img: {
    width: 60,
    height: '24',
    padding: '1',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '10',
    fontFamily: 'Roboto',
  },


  flex: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  col: {
    width: '60%',
  },
  colRight: {
    width: '40%',
    paddingLeft: '10',
  },

  logSec: {
    width: '30%',
    borderBottom: '1 solid #231f20',

    borderRight: '1 solid #231f20',
  },

  bkType: {
    color: '#1c123b',
    width: '100%',
    padding: '8 10 0',
    fontSize: '12',
    fontFamily: 'Roboto',
    textTransform: 'uppercase',
    fontWeight: 600,
    letterSpacing: 2,

  },
  logo: {
    padding: '0 5 5 10',
    borderBottom: '1 solid #231f20',
  },
  booking: {
    width: 'calc(70% - 40)',
    borderBottom: '1 solid #231f20',
    padding: '5 0 5 10',
  },
  labeld: {
    color: '#adafbb',
    fontFamily: 'Roboto',
    fontSize: 16,
  },
  labeldd: {
    color: '#adafbb',
    padding: '0 0px',
    fontSize: '12',
    fontFamily: 'Roboto',
    textTransform: 'uppercase',
    fontWeight: 600,
    letterSpacing: 1,
  },
  bid: {
    color: '#1c123b',
    fontSize: '16',
    fontFamily: 'Roboto',
    fontWeight: 600,
    letterSpacing: 1,
    margin: ' 2 0 3 0',
  },
  taskLabl: {
    color: '#adafbb',
    padding: '0 0px',
    fontSize: '10',
    fontFamily: 'Roboto',
    textTransform: 'uppercase',
    fontWeight: 600,
    letterSpacing: 1,
    marginRight: 3,
  },
  inlineFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',

  },
  tid: {
    color: '#1c123b',
    fontSize: '10',
    fontFamily: 'Roboto',
    fontWeight: 600,
    letterSpacing: 1,
  },
  address: {
    color: '#1c123b',
    fontSize: '9',
    fontFamily: 'Roboto',
    fontWeight: 600,
    letterSpacing: 0.5,
    textOverflow: 'Ellipsis',
    maxHeight: '80',
  },
  dlD: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#ffd806',
    color: '#1c123b',
    padding: '5 10',
    textTransform: 'uppercase',
    fontSize: 8,
    fontWeight: 600,
    letterSpacing: 1,
  },
  perBlock: {
    borderBottom: '1 solid #231f20',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  nameFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // padding: '0 10',
    fontSize: '10',
    borderRight: '1 solid #231f20',
    padding: '8 10',

  },
  phoneFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: '10',
    padding: '8 10',
  },
  addBlk: {
    borderBottom: '1 solid #231f20',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',

  },
  bkRefBlk: {
    borderBottom: '1 solid #231f20',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',

  },
  add: {
    padding: '8 5 8 10',
  },
  addRef: {
    width: '50%',
    borderRight: '1 solid #231f20',
  },

  addMore: {
    width: '50%',
  },
  fromName: {
    width: '35%',
  },
  bkngRef: {
    width: '70%',
    borderRight: '1 solid #231f20',
  },
  codBlk: {
    width: '30%',
  },
  zone: {
    padding: '8 0 8 10',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  barcode: {

    padding: 5,
    width: '100%',
    height: 70,
  },
  moreInf: {
    padding: '8 5 8 10',
  },
  disBlk: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    borderBottom: '1 solid #231f20',
  },
  dis: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: '8 0 0',
    width: '65%',
    borderRight: '1 solid #231f20',
  },
  itemDes: {
    width: '100%',
    padding: '0 0 8 10',
  },
  weightBlok: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: '5  0',
  },
  cod: { padding: '0 0 8 10' },
  halfBlk: {
    width: '50%',
    padding: '0 0 8 10',
  },
  ondemand: {
    backgroundColor: '#ed5757',
    color: '#fff',
    textTransform: 'uppercase',
    position: 'absolute',
    right: 0,
    bottom: 0,
    padding: '5 10',
    fontSize: 8,
    fontWeight: 600,
    letterSpacing: 1,
  },
  samday: {
    backgroundColor: '#139a67',
    color: '#fff',
    textTransform: 'uppercase',
    position: 'absolute',
    right: 0,
    bottom: 0,
    padding: '5 10',
    fontSize: 8,
    fontWeight: 600,
    letterSpacing: 1,
  },
  fromBlk: {
    padding: '8 0 8 10',
  },

});


const barcodeGenator = (id) => {
  const canvas = document.createElement('canvas');
  JsBarcode(canvas, id);
  const barcode = canvas.toDataURL();
  return barcode;
};


function PrintOrder(props) {
  const paramId = props.routeParams.id;
  const [bookingDetails, setBookingDetails] = useState([]);
  const [addressValue, setAddressValue] = useState(false);
  const re = /^\d*(\.\d+)?$/;
  const fetchAllTasks = async (id) => {
    try {
      const res = await request({ url: APIURL.ALL_TASKS.replace('{bookingId}', id), method: 'GET' });
      if (!res.success) {
        const error = ErrorMapping.serverDefinedError(res);
        console.log(ErrorMapping.serverDefinedError(res), 'error');
        throw (error);
      }
      return res.data;
    } catch (err) {
      // const error = err.response.data.message;
      const error = err;
      throw (error);
    }
  };
  const fetchSingleTask = async (id) => {
    try {
      const res = await request({ url: APIURL.SINGLE_TASK.replace('{taskId}', id), method: 'GET' });
      if (!res.success) {
        const error = ErrorMapping.serverDefinedError(res);
        console.log(ErrorMapping.serverDefinedError(res), 'error');
        throw (error);
      }
      return res.data;
    } catch (err) {
      const error = err.response.data.message;
      throw (error);
    }
  };
  // const fetchManualTask = async (id) => {
  //   try {
  //     const res = await request({ url: APIURL.GET_MANUAL_BOOKINGS.replace('{bookingId}', id), method: 'GET' });
  //     if (!res.success) {
  //       const error = ErrorMapping.serverDefinedError(res);
  //       console.log(ErrorMapping.serverDefinedError(res), 'error');
  //       throw (error);
  //     }
  //     return res.data;
  //   } catch (err) {
  //     const error = err.response.data.message;
  //     throw (error);
  //   }
  // };
  useEffect(() => {
    const fetchData = async () => {
      // if (paramId.includes('-')) {
      //   setBookingDetails(await fetchManualTask(paramId));
      // } else
      if (paramId.match(re)) {
        setBookingDetails(await fetchSingleTask(paramId));
      } else {
        setBookingDetails(await fetchAllTasks(paramId));
      }
    };
    fetchData();
  }, [paramId]);
  useEffect(() => {
    if (bookingDetails.length > 0) {
      for (let data = 0; data < bookingDetails.length; data++) {
        if (bookingDetails[data].jdesc && bookingDetails[data].jdesc.indexOf('|') > -1) {
          setAddressValue(true);
        }
      }
    }
  }, [bookingDetails]);
  console.log(addressValue);
  return ((bookingDetails && bookingDetails.length > 0) ? (
    <PDFViewer style={{ marginTop: '1px', width: '100%', height: '100%' }}>
      <Document>
        {/* {partnerId === PANJATHANI_PARTNER_ID ?  */}
        <Page size="A6" style={styles.page} wrap>
          <View style={styles.mainSec} >
            {bookingDetails && bookingDetails.map((bkng, index) => (
              <View style={styles.main} wrap={false} key={index} >

                <View style={styles.tableBody}>
                  <View style={styles.table}>
                    <View>
                      <View style={styles.flex}>
                        <View style={styles.logSec}>
                          <View style={styles.logo}>
                            <Text >
                              <Image style={styles.img} src={Logo} />
                            </Text>
                          </View>
                          <View>
                            <Text style={styles.bkType}>{bkng.jtyp}</Text>
                          </View>
                        </View>
                        <View style={styles.booking}>
                          <View style={styles.labeld}>
                            <Text style={styles.labeldd}>Booking ID</Text>
                          </View>
                          <Text style={styles.bid}>{bkng.bkid}</Text>
                          <View style={styles.inlineFlex}>
                            <Text style={styles.taskLabl}>Task ID </Text>
                            <Text style={styles.tid}>{bkng.jid}</Text>
                          </View>
                          {bkng.bktyp === 'On Demand' ? <View style={styles.ondemand}>
                            <Text>{bkng.bktyp}</Text>
                          </View> :
                            bkng.bktyp === 'Next Day' ? <View style={styles.dlD}>
                              <Text>{bkng.bktyp}</Text>
                            </View>
                              : <View style={styles.samday}>
                                <Text>{bkng.bktyp}</Text>
                              </View>}

                        </View>
                      </View>
                      <View style={styles.perBlock}>
                        <View style={styles.nameFlex}>
                          <View style={styles.inlineFlex}>
                            <Text style={styles.taskLabl}>Name </Text>
                            <Text style={styles.tid}>{bkng.cname}</Text>
                          </View>
                        </View>
                        <View style={styles.phoneFlex}>
                          <View style={styles.inlineFlex}>
                            <Text style={styles.taskLabl}>PHONE </Text>
                            <Text style={styles.tid}>{bkng.cphn}</Text>
                          </View>
                        </View>
                      </View>

                      <View style={styles.bkRefBlk}>
                        <View style={styles.bkngRef}>

                          <View style={styles.zone}>
                            <Text style={styles.taskLabl}>BOOKING REF </Text>
                            <Text style={styles.tid} >{bkng.bkref}</Text>
                          </View>

                        </View>
                        <View style={styles.codBlk}>
                          <View style={styles.zone}>
                            <Text style={styles.taskLabl}>COD </Text>
                            <Text style={styles.tid}>{bkng.ccamt}</Text>

                          </View>

                        </View>
                      </View>

                      <View style={styles.addBlk}>
                        <View style={styles.addRef}>


                          <View style={styles.add}>
                            <Text style={styles.taskLabl}>ADDRESS </Text>
                            <Text style={styles.address}>{bkng.cadd}</Text>

                          </View>
                        </View>
                        <View style={styles.addMore}>

                          <View style={styles.moreInf}>
                            <Text style={styles.taskLabl}>MORE INFORMATION </Text>
                            <Text style={styles.address}>{bkng.addtl}</Text>
                          </View>
                        </View>
                      </View>

                      <View style={styles.disBlk}>
                        <View style={styles.dis}>
                          <View style={styles.itemDes}>
                            <Text style={styles.taskLabl}>Item Description </Text>
                            <Text style={styles.address}>{bkng.jdesc}</Text>

                          </View>

                        </View>

                        <View style={styles.fromName}>
                          <View style={styles.fromBlk}>
                            <Text style={styles.taskLabl}>FROM </Text>
                            <Text style={styles.tid}>{bkng.chnl === 'B2C' ? bkng.prnam : bkng.cname}</Text>
                          </View>

                          {/* <Text><BarCodeGenerator barcodeText={'123456'}/></Text> */}
                        </View>
                      </View>
                      <View style={styles.barcodeBlk}>

                        {bkng.barcod ? <Image style={styles.barcode} src={barcodeGenator(bkng.barcod)} /> : <Image style={styles.barcode} src={barcodeGenator(bkng.ordid)} />}
                      </View>


                    </View>

                    {/*


                 */}
                  </View>
                </View>
              </View>))}
          </View>
        </Page>
      </Document>
    </PDFViewer>

  ) : 'Loading...');
}


export default PrintOrder;
