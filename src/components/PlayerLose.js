const PlayerLose = () => {
  return (
    <div style={styles.lose}>Wrong, guess again!</div>
  )
}
export default PlayerLose

const styles = {
    lose: {
      height: '100px',
      width: 'auto',
      color: 'red',
      fontSize: '22px'
    }
  }