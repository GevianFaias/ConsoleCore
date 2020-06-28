using GameTOP.Intercae;

namespace GameTOP.Lib
{
    public class Jogador2 : iJogador
    {
        public string Chuta()
        {
            return $"Maradona esta corriendo \n";
        }
        
        public string Corre()
        {
            return $"Maradona esta pateando \n";
        }
        
        public string Passe()
        {
            return $"Maradona esta chutando \n";
        }
    }
}
