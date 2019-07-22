import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.revature.model.Member;
import com.revature.repository.MemberRepo;

public class Driver
{
	public static void main(String[] args)
	{
		
		//Member memberx = new Member(1,"user","pass","serve","saa"); 
		//MemberRepo repo = new MemberRepo();
		//repo.insertMember(memberx);
		
		//List <Member> member = new MemberRepo().getAllMembers();
		//Member xMember = new MemberRepo().getMemberByUsername("user");
		Member xMember = new MemberRepo().getMemberById(1);
		System.out.println(xMember);
	}
}
