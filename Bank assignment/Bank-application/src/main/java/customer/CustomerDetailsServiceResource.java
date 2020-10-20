package customer;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/customers")
public class CustomerDetailsServiceResource {
	@Autowired
	CustomerDetailsServiceDao dao;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/{id}")
	public Customer getCustomerById(@PathVariable("id") int id) {
		return dao.getCustomerById(id);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/")
	public Customer postCustomer(@RequestBody Customer customer) {
		return dao.postCustomer(customer);
	}
}
