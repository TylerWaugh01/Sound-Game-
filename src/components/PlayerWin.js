

const PlayerWin = ({ birdImage, name, bio }) => {
  return (
    <div>
      <h2 style={styles.win}>You guessed correctly!</h2>
      <img style={{width: '200px'}} src={birdImage} alt={name} />
      <p style={styles.win}>{bio}</p>
    </div>
  )
}
export default PlayerWin

const styles = {
  win: {
    height: '100px',
    width: 'auto',
    color: 'white',
    fontSize: '22px'
  }
}