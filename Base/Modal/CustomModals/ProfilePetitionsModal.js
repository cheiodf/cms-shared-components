import Typography from '../../Typography/Typography';
import ModalButtons from '../ModalButtons';
import Avatar from '../../Avatar/Avatar';
import Button from '../../Button/Button';
import Divider from '../../Divider/Divider';
import Grid from '../../Grid/Grid';
import GridItem from '../../Grid/GridItem';
import {
  PetitionContainer,
  PetitionButtons,
} from '../modalStyles';

const ProfilePetitionsModal = ({
  list = [],
  handleClose,
  buttonCloseTitle,
  loading,
  size,
  type,
  onAction
}) => {
  return (
    <div>
      <Typography tag="h3" color="#B2B2B2">
        Tienes <span style={{ color: 'var(--primary)' }}>{list.length}</span> solicitud{list.length === 1 ? '' : 'es'} para ser {type === 'owner' ? 'responsable' : 'colaborador'}
      </Typography>
  
      <div>
        {list.length ? list?.map(petition => 
          <PetitionContainer key={petition[type]._id}>
            <Grid
              cols={8}
              rows={1}
              columnGap={2}
            >
              <GridItem cols={2} rows={1}>
                <Avatar src={petition[type].avatar} isEditable={false} size="sm" />
              </GridItem>
              <GridItem cols={6} rows={1}>
                <Typography margin="0 0 2rem 1rem" weight="bold">{petition[type].name}</Typography>
                <Typography margin="0 0 0 1rem" style={{ opacity: 0.6 }} maxLines={2} onHover={{maxLines: 0}} wordWrap={true}>{petition.message}</Typography>
                <PetitionButtons>
                  <Button
                    size="sm"
                    type="button"
                    margin="2rem 0 1rem 1rem"
                    variant="primary"
                    onClick={() => onAction(petition[type]._id, 'accepted')}
                  >
                    Aceptar
                  </Button>
                  <Button
                    size="sm"
                    type="button"
                    margin="2rem 0 1rem 1rem"
                    variant="dark2"
                    onClick={() => onAction(petition[type]._id, 'rejected')}
                  >
                  Rechazar
                  </Button>
                </PetitionButtons>
              </GridItem>
            </Grid>
            <div className="modalStyles__PetitionDivider">
              <Divider />
            </div>
          </PetitionContainer>
        ) : ''}
      </div>
  
      <ModalButtons
        onClose={handleClose}      
        buttonCloseTitle={buttonCloseTitle}
        disabled={loading}
        size={size}
      />
    </div>
  );
};

export default ProfilePetitionsModal;
