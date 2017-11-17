const style = {
  commonStyle: {
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: '#FF5733',
      fontSize: 16,
      fontWeight: '300',
      marginBottom: 20,
    },
    textInput: {
      width: '90%',
      height: 300,
      borderTopWidth: 1,
      borderTopColor: "#efefef",
      borderBottomWidth: 1,
      borderBottomColor: "#efefef",
      color: '#888',
      paddingTop: 16,
      paddingBottom: 16,
      fontSize: 13,
      lineHeight: 16,
    },
    icon: {
      width: 20,
      height: 20,
    },
  },
  diaryStyle: {
    list: {
      width: '90%',
      paddingTop: 15,
      paddingBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#efefef',
    },
    listTitle: {
      fontSize: 16,
      fontWeight: '300',
      color: '#888'
    },
    listDate: {
      marginTop: 10,
      fontSize: 12,
      fontWeight: '300',
      color: '#ccc',
    }
  },
  writeStyle: {
    infos: {
      color: '#888',
      fontSize: 11,
      fontWeight: '500'
    }
  }
};

export default style;
