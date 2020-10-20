package account;

public class Account {
int accid;
int custid;
int bal;

public Account() {
	super();
}

public Account(int accid, int custid, int bal) {
	super();
	this.accid = accid;
	this.custid = custid;
	this.bal = bal;
}

public int getAccid() {
	return accid;
}

public void setAccid(int accid) {
	this.accid = accid;
}

public int getCustid() {
	return custid;
}

public void setCustid(int custid) {
	this.custid = custid;
}

public int getBal() {
	return bal;
}

public void setBal(int bal) {
	this.bal = bal;
}

@Override
public String toString() {
	return "Account [accid=" + accid + ", custid=" + custid + ", bal=" + bal + "]";
}

}
