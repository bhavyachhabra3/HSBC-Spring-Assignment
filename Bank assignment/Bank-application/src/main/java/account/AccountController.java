package account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class AccountController {

	@Autowired
    private AccountRepository accountRepository;
	
	
    @PostMapping(value = "/account")
    public Account save (@RequestBody Account account){
        return accountRepository.save(account);
    }
    
    @CrossOrigin(origins="http://localhost:4200")
    @GetMapping(value = "/account/customer/{customer}",produces = "application/json")
    public List<Account> findByCutomer (@PathVariable Integer customer){
	return accountRepository.findAllByCustomerId(customer);
    }

	
}
