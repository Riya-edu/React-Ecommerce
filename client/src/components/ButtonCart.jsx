
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={1} direction="row">
    <div className="h-56 flex-auto justify-center items-center self-auto content-center"> 
    <Button variant="contained" className="bg-red-300 hover:bg-red-400">
    Browse Catalog
  </Button>
      </div>
    </Stack>
  );
}