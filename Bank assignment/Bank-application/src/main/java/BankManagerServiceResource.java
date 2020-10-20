import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.RestTemplate;

import account.Account;
import customer.Customer;

public class BankManagerServiceResource {

	@Autowired
	RestTemplate restTemplate;
	
	@CrossOrigin(origins ="http://localhost:4200")
	@RequestMapping("/account/{custid}")
	public CustomerAccount getCategories(@PathVariable("custid") int custid) {
		Account account=restTemplate.getForObject("http://localhost:8081/account/", custid,Account.class);
		Customer customer=restTemplate.getForObject("http://localhost:8080/customer/", custid,Customer.class);
		return new CustomerAccount(customer,account);
	}
}
