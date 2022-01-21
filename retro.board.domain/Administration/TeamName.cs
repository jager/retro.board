using System;
using System.Collections.Generic;
using System.Text;

namespace retro.board.domain.Administration
{
    public class TeamName : ValueObject<string>
    {
        public TeamName(string name) : base(name)
        {
                
        }
    }
}
