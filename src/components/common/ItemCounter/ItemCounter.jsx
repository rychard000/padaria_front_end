import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch } from 'react-redux';
import { decreaseProductQuantity, increaseProductQuantity, } from '../../../Redux/Cart/Action';
import './ItemCounter.css'

export default function ItemCounter({product}) {

  const dispatch = useDispatch();

  const handleIncreaseClick = () => {
    dispatch(increaseProductQuantity(product));
  };

  const handleDecreaseClick = () => {
    dispatch(decreaseProductQuantity(product));
  };

  return (
    <div>
      <ToggleButtonGroup style={{ height: '30px', border: '1px solid black' }}>
        <ToggleButton style={{ border: 'none', width: '35px' }} onClick={handleDecreaseClick} value="decrement">
          <RemoveIcon style={{ color: 'black' }} />
        </ToggleButton>
          <span className='itemCounterSpan'>
            {product.quantity}
          </span>
        <ToggleButton style={{ border: 'none', width: '35px' }} onClick={handleIncreaseClick} value="increment">
          <AddIcon style={{ color: 'black' }} />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}