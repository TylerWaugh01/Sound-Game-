


const PlayerWin = ({ birdImage, name, bio }) => {
  return (
    <div style={styles.background}>
      <h2 style={styles.heading}>You guessed correctly!</h2>
        <img style={styles.image} src={birdImage} alt={name} />
      <p style={styles.text}>{bio}</p>
    </div>
  )
}
export default PlayerWin

const styles = {
  background: {
    marginTop: '20px',
    maxWidth: '800px',
    padding: '20px',
    backgroundColor: '#ffd6e0ff'
  },
  image: {
    display: 'block',
    width: '250px',
    margin: '0 auto',
    border: '4px solid #90f1efff'
  },
  text: {
    color: 'black',
    fontSize: '22px',
  },
  heading: {
    height: '100px',
    margin: 0,
    textAlign: 'center',
    width: 'auto',
    color: 'white',
    fontSize: '44px'
  },
}