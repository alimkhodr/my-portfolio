import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface CardProjectsProps {
  title: string;
  date: string;
  description: string;
  link: string;
}

export default function CardProjects({ title, date, description, link }: CardProjectsProps) {
  return (
    <Box sx={{ minWidth: 275, width: '100%' }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {date}
          </Typography>
          <Typography variant="body2">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={link}>Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
