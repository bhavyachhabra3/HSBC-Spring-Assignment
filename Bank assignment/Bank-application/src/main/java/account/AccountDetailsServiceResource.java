package account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/accounts")
public class AccountDetailsServiceResource {

	@Autowired
	AccountDetailsServiceDao dao;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/{custId}")
	public Account getAccountById(@PathVariable("custId") int id) {
		return dao.getAccountById(id);
	}
}
