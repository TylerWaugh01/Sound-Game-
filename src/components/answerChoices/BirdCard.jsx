
//styling
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import './birdCard.css'


const BirdCard = ({ name, image}) => {

  return (
    <Card className="bird-card" sx={{ maxWidth: 200, margin: '10px' }}>
      <CardMedia
        component="img"
        height="100"
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography variant="h5" component="div" sx={{textAlign: 'center'}}>
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BirdCard

