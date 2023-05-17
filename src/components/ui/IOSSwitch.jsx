
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 40,
    height: 20,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 2,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {//space
            transform: 'translateX(20px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: 'hsl(213, 96%, 18%)',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {//space
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {//space
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {//space
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {//space
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 12,
        height: 12,
    },
    '& .MuiSwitch-track': {
        borderRadius: 18,
        backgroundColor: 'hsl(213, 96%, 18%)',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));

export default IOSSwitch;