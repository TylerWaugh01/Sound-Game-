

const PlayerWin = ({ birdImage, name }) => {
  return (
    <div>
      <h2 style={styles.win}>You guessed correctly!</h2>
      <img style={{width: '200px'}} src={birdImage} alt={name} />
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