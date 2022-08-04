using MyStudents.Models;

namespace NUnitTest;

public class TestStudentDbSet: TestDbSet<Student>
{
    public override Student Find(params object[] keyValues)
    {
        return this.SingleOrDefault(product => product.Id == (int)keyValues.Single());
    }
}