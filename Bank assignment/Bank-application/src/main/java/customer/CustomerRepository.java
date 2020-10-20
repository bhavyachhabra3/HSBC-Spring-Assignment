package customer;

import java.util.List;

public interface CustomerRepository {

	List<Customer> findAllByCustomerId(Integer customerId);

    Customer findAccountByCustomerId(Integer custId);

	
	
}
