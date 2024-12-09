package be.condorcet;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import java.util.List;

@Path("/utilisateurs")
public class UtilisateursController {

	public UtilisateursController() {
		private UtilisateursDAO utilisateurDAO = new UtilisateursDAO();
		
		@POST
		@Consumes(MediaType.APPLICATION_JSON)
		public Response ajouterUtilisateur(Utilisateur utilisateur) {
			utilisateurDAO.ajouterUtilisateur(utilisateur);
			return Response.status(Response.Status.CREATED).build();
			
		}
		
	}

}
