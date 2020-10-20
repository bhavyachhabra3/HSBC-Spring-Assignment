package customer;

public class Customer {
 int custid;
 String custname;
 String address;
public Customer() {}

public Customer(int custid, String custname, String address) {
	super();
	this.custid = custid;
	this.custname = custname;
	this.address = address;
}

public int getCustid() {
	return custid;
}
public void setCustid(int custid) {
	this.custid = custid;
}
public String getCustname() {
	return custname;
}
public void setCustname(String custname) {
	this.custname = custname;
}
public String getAddress() {
	return address;
}
public void setAddress(String address) {
	this.address = address;
}
@Override
public String toString() {
	return "Account [custid=" + custid + ", custname=" + custname + ", address=" + address + "]";
}
 
}
