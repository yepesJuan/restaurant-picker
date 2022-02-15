import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#cde"
    },
    card: {
        margin: 8,
        alignSelf: 'center',
        borderRadius: 8,
        borderColor: '#807060',
        borderWidth: 1,
        width: 320,
        backgroundColor: "#fff"
        // elevation: 5,
        // shadowColor: '#807060',
        // shadowOffset: { width: 1, height: 2},
        // shadowOpacity: 0.8,
        // shadowRadius: 2,
    }, 
    cardImage: {
        width: 318,
        height: 200,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,

    },
    cardTitle: {
        fontSize: 28,
        fontWeight: '600',
        padding: 4
    },
    cardSubtitle: {
        fontSize: 16,
        fontWeight: '200',
        padding: 4,
    },
    detailsImage: {
      width: '100%',
      height: 200,
    }

})

export default styles