package account;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;
public interface AccountRepository extends CrudRepository<Account,Integer> {

    List<Account> findAllByCustomerId(Integer customerId);

    Account findAccountByAccountId(Integer accountId);
}
