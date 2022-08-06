using System.Data.Entity;
using MyStudents.Models;

namespace NUnitTest;

public class TestStudentAppContext: StudentContext
{
    public TestStudentAppContext()
    {
        this.Products = new TestStudentDbSet();
    }

    public DbSet<Student> Products { get; set; }

    public int SaveChanges()
    {
        return 0;
    }

}