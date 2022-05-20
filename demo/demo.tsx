import { createStitches } from '@stitches/react';

const { styled } = createStitches({
  theme: {
    colors: {
      brandBlue: '#5855FF',
    },
    fonts: {
      'brand-font-btn': 'Manrope',
    },
  },
});

const Card = styled('div', {
  margin: '2rem',
  backgroundColor: 'rgba(255, 255, 255, 0.42)',
  border: '1.73377px solid rgba(0, 0, 0, 0.08)',
  boxShadow: '0px 6.93506px 48.5455px rgba(211, 208, 208, 0.25)',
  backdropFilter: 'blur(48.5455px)',
  borderRadius: '6.93506px',
});

const AddButton = styled('button', {
  appearance: 'none',
  outline: 'none',
  padding: '1.5rem 2.5rem',
  color: '$brandBlue',
  backgroundColor: 'white',
  borderRadius: '0.5rem',
  border: '1px solid $brandBlue',
  fontFamily: '$brand-font-btn',
  fontWeight: '500',
  fontSize: '30px',
  transition: '0.3s ease',

  '&:hover': {
    backgroundColor: '$brandBlue',
    color: 'white',
  },
});

export default function TaskCard() {
  return (
    <>
      <Card>
        <AddButton>Add Item</AddButton>
      </Card>
    </>
  );
}
