import java.util.ArrayList;
import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.revature.model.Item;
import com.revature.model.Member;
import com.revature.repository.MemberRepo;

public class Driver
{
	public static void main(String[] args)
	{
		MemberRepo repo = new MemberRepo();
		//Member x = new Member(11,"username1","pass","servername","region");
		//repo.insertMember(x);
		//repo.insertItem(new Item(3,1,1,x));
		Member test= repo.getMemberById(11);
		System.out.println(test);
	}
}
