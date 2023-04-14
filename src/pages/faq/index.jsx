import { Box, useTheme } from '@mui/material'
import Header from '../../components/Header'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { tokens } from '../../theme'

const faqs = [
  {
    title: 'Question 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tempore vel molestias aut quisquam necessitatibus sunt ea sint quae quo?',
    default: true,
  },
  {
    title: 'Question 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tempore vel molestias aut quisquam necessitatibus sunt ea sint quae quo?',
    default: true,
  },
  {
    title: 'Question 3',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus sit quod tenetur, culpa totam blanditiis explicabo porro in libero? Vitae reprehenderit similique possimus eos, autem officia voluptatem nobis quo, consequuntur assumenda dignissimos enim suscipit eius, facere tempora laudantium cupiditate debitis alias nulla animi a sed obcaecati labore! Reiciendis, optio libero?',
    default: true,
  },
]

const FAQ = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box m='20px'>
      <Header title='FAQ' subtitle='Frequently Asked Questions Page' />
      {faqs.map(faq => (
        <Accordion defaultExpanded={faq.default}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant='h5'>
              {faq.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  )
}

export default FAQ
