import { useState, useEffect, useRef } from "react";
import {
  Brain, Clock, Target, BookOpen, CheckCircle2, Zap, Shield, ArrowRight,
  ChevronRight, Award, TrendingUp, XCircle, AlertTriangle, Lightbulb,
  ShoppingCart, Eye, Lock, CreditCard, Gift, Users, Stethoscope
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import CountdownTimer from "@/components/CountdownTimer";
import PurchaseNotification from "@/components/PurchaseNotification";


import criadoraImg from "@/assets/criadora.png";
import screenshot1 from "@/assets/screenshot1.png";
import screenshot2 from "@/assets/screenshot2.png";
import screenshot3 from "@/assets/screenshot3.png";
import screenshot4 from "@/assets/screenshot4.png";
import screenshot5 from "@/assets/screenshot5.png";
import screenshot6 from "@/assets/screenshot6.png";
import screenshot7 from "@/assets/screenshot7.png";
import screenshot8 from "@/assets/screenshot8.png";
import screenshot9 from "@/assets/screenshot9.png";
import screenshot10 from "@/assets/screenshot10.png";
import flashcard2 from "@/assets/flashcard-2.png";
import flashcard3 from "@/assets/flashcard-3.png";
import whatsappProof from "@/assets/whatsapp-proof.png";
import whatsappImageFinal from "@/assets/whatsapp-image-final.jpeg";
import avaliacao1 from "@/assets/1.jpg";
import avaliacao2 from "@/assets/2.jpg";

const CTA_URL = "https://pay.kiwify.com.br/ehDsvac";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, visible } = useInView();
  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
};

const CTAButton = ({ text = "QUERO MEUS FLASHCARDS AGORA", className = "" }: { text?: string; className?: string }) => (
  <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="block w-full">
    <Button
      size="lg"
      className={`bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base md:text-lg px-8 py-6 rounded-xl glow-green animate-pulse-glow w-full inline-flex items-center justify-center gap-2 leading-none ${className}`}
    >
      <span className="text-center">{text}</span>
      <ArrowRight className="w-5 h-5 shrink-0" />
    </Button>
  </a>
);

const Index = () => {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden medical-theme-bg">
      {/* Lightbox */}
      <Dialog open={!!lightboxImg} onOpenChange={() => setLightboxImg(null)}>
        <DialogContent className="max-w-3xl p-2 bg-background/95 border-border">
          {lightboxImg && <img src={lightboxImg} alt="Flashcard ampliado" className="w-full rounded-lg" />}
        </DialogContent>
      </Dialog>
      <PurchaseNotification />

      {/* ===== STICKY TOP BAR ===== */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-secondary/20 py-3">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <span className="font-display font-bold text-sm md:text-base inline-flex items-center gap-2">
            <Stethoscope className="w-4 h-4 text-secondary" /> Flashcards Medicina
          </span>
          <div className="flex items-center gap-3">
            <CountdownTimer />
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs md:text-sm px-4 py-2 rounded-lg glow-green animate-pulse-glow">
                COMPRAR AGORA <ArrowRight className="ml-1 w-3.5 h-3.5" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* ===== HERO ===== */}
      <section
        className="relative min-h-screen flex items-center bg-black/80"
        style={{
          backgroundImage: `url(${criadoraImg})`,
          backgroundSize: window.innerWidth < 768 ? "cover" : "cover",
          backgroundPosition: window.innerWidth < 768 ? "center 30%" : "center 12%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(212_38%_8%/.82)_0%,hsl(212_38%_8%/.68)_40%,hsl(212_38%_8%/.88)_100%)]" />
        <div className="relative container mx-auto px-4 py-16 sm:py-20 md:py-32 text-center">
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 max-w-5xl mx-auto">
            +3000 Flashcards Prontos Para Você Conquistar Sua{" "}
            <span className="text-gradient">Aprovação em Medicina</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Eu fui aprovada em 5 faculdades de medicina usando esse método. 
            Agora você pode ter acesso ao mesmo material que mudou minha vida.
          </p>

          <CTAButton text="QUERO MEUS FLASHCARDS" />

          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-10 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>Garantia de 7 dias</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROBLEMA ===== */}
      <section className="py-12 sm:py-16 md:py-28">
        <div className="container mx-auto px-4">
          <Section>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
              Eu sei como é <span className="text-destructive">se sentir assim</span>...
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Antes de ser aprovada, eu também passava por tudo isso. Se você se identifica, saiba que existe solução.
            </p>
          </Section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {[
              { icon: XCircle, title: "Esquece o que estudou", desc: "Eu estudava o dia inteiro e na hora da prova não lembrava de nada. Parecia que meu cérebro apagava tudo." },
              { icon: Clock, title: "Horas desperdiçadas", desc: "Passava 10, 12 horas estudando e sentia que não avançava. O tempo ia embora sem resultado real." },
              { icon: AlertTriangle, title: "Ansiedade paralisante", desc: "A prova chegando e aquela sensação horrível de não estar preparada. A ansiedade me travava completamente." },
              { icon: Target, title: "Sem método de revisão", desc: "Eu estudava uma vez e torcia pra lembrar. Não tinha nenhum sistema organizado de revisão." },
            ].map((item, i) => (
              <Section key={i}>
                <div className="bg-card border border-border rounded-xl p-6 hover:border-destructive/50 transition-colors">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="p-2 bg-destructive/10 rounded-lg shrink-0">
                        <item.icon className="w-5 sm:w-6 h-5 sm:h-6 text-destructive" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-base sm:text-lg mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-xs sm:text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AGITAÇÃO ===== */}
      <section className="py-12 sm:py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <Section>
            <div className="text-center">
              <Lightbulb className="w-12 h-12 text-secondary mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Eu também já me senti assim. Mas encontrei o caminho.
              </h2>
              <div className="space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
                <p>
                  Eu sei o que é estudar por horas e sentir que nada fica na memória.
                  Mas quando eu descobri os <strong className="text-foreground">flashcards e a repetição espaçada</strong>,
                  tudo mudou. Minha memorização disparou e eu comecei a <strong className="text-foreground">acertar questões que antes parecia impossível</strong>.
                </p>
                <p>
                  Com o método certo, <strong className="text-foreground">qualquer pessoa pode conquistar a aprovação em medicina</strong>.
                  Não importa quantas vezes você já tentou — o que falta é a ferramenta certa nas suas mãos.
                  <span className="text-primary font-semibold"> E essa ferramenta são os flashcards.</span>
                </p>
                <p className="text-secondary font-semibold text-xl mt-8">
                  🚀 Eu fui aprovada em 5 faculdades. Agora é a sua vez!
                </p>
              </div>
              <div className="mt-8">
                <CTAButton text="QUERO MINHA APROVAÇÃO — R$ 37,90" />
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* ===== SOLUÇÃO ===== */}
      <section className="py-12 sm:py-16 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center max-w-5xl mx-auto">
            <Section>
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
                  <Lightbulb className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">A solução que me aprovou</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                  Conheça os <span className="text-gradient">Flashcards</span> que me deram múltiplas aprovações
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg mb-6">
                  Eu criei +3000 flashcards durante minha preparação e fui aprovada em <strong className="text-foreground">5 faculdades de medicina</strong>: 
                  Einstein, UFRJ, Santa Casa, Sírio-Libanês e FMJ.
                </p>
                <p className="text-muted-foreground mb-8">
                  Cada card foi cuidadosamente elaborado com dicas exclusivas dos meus professores,
                  organizado por matéria e pronto para uso imediato. Agora estou compartilhando tudo isso com você.
                </p>
                <CTAButton text="QUERO MEUS FLASHCARDS — R$ 37,90" />
              </div>
            </Section>
            <Section>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden border border-border glow-green">
                  <img src={criadoraImg} alt="Emanuela - Aprovada em 5 faculdades de medicina" className="w-full" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-card border border-primary/30 rounded-xl px-4 py-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-semibold">5 aprovações em medicina</span>
                  </div>
                </div>
              </div>
            </Section>
          </div>
        </div>
      </section>

      {/* ===== BENEFÍCIOS ===== */}
      <section className="py-12 sm:py-16 md:py-28 bg-card/50">
        <div className="container mx-auto px-4">
          <Section>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
              Por que meus flashcards são <span className="text-gradient">diferentes</span>?
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
              Não são flashcards genéricos da internet. São as mesmas ferramentas que me aprovaram.
            </p>
          </Section>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {[
              { icon: BookOpen, title: "+3000 Flashcards", desc: "Conteúdo completo cobrindo todas as matérias dos principais vestibulares de medicina." },
              { icon: Brain, title: "Memorização Ativa", desc: "Baseado em técnicas comprovadas de repetição espaçada que fixam o conteúdo na memória de longo prazo." },
              { icon: Zap, title: "Estude Mais Rápido", desc: "Elimine o tempo perdido com resumos ineficientes. Vá direto ao que importa." },
              { icon: Target, title: "Foco no Vestibular", desc: "Conteúdo direcionado para o que realmente cai nas provas mais concorridas." },
              { icon: Award, title: "Dicas de Professores", desc: "Insights exclusivos dos meus professores incorporados diretamente nos cards." },
              { icon: TrendingUp, title: "Produtividade Máxima", desc: "Estude em qualquer lugar, a qualquer hora. Otimize cada minuto do seu dia." },
            ].map((item, i) => (
              <Section key={i}>
                <div className="bg-card border border-border rounded-xl p-4 sm:p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 group">
                  <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-base sm:text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">{item.desc}</p>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AMOSTRA DOS FLASHCARDS ===== */}
      <section className="py-12 sm:py-16 md:py-28">
        <div className="container mx-auto px-4">
          <Section>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
              Veja na prática como você vai <span className="text-gradient">estudar</span>
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Esses são exemplos reais dos meus flashcards. Note a organização, clareza e foco em memorização.
            </p>
          </Section>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {[screenshot1, screenshot2, screenshot3, screenshot4, screenshot5, screenshot6, screenshot7, screenshot8, screenshot9, screenshot10, flashcard2, flashcard3].map((img, i) => (
              <Section key={i}>
                <div 
                  className="rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 hover:scale-[1.02] cursor-pointer group relative"
                  onClick={() => setLightboxImg(img)}
                >
                  <img src={img} alt={`Exemplo de flashcard ${i + 1}`} className="w-full" loading="lazy" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </Section>
            ))}
          </div>

          <Section>
            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/30 rounded-full px-5 py-2">
                <Eye className="w-4 h-4 text-secondary" />
                <span className="text-secondary font-medium">
                  Isso é apenas uma pequena parte dos +3000 flashcards disponíveis
                </span>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* ===== COMO FUNCIONA ===== */}
      <section className="py-12 sm:py-16 md:py-28 bg-card/50">
        <div className="container mx-auto px-4">
          <Section>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-8 sm:mb-12">
              Como funciona?
            </h2>
          </Section>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", icon: ShoppingCart, title: "Compre", desc: "Faça sua compra com total segurança. O acesso é imediato após a confirmação do pagamento." },
              { step: "02", icon: Lock, title: "Acesse", desc: "Receba o acesso completo aos +3000 flashcards organizados por matéria. Tudo pronto para começar." },
              { step: "03", icon: Brain, title: "Estude e Aprove", desc: "Use o método de repetição espaçada e veja sua memorização disparar. Sua aprovação ficou mais perto." },
            ].map((item, i) => (
              <Section key={i}>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-display font-bold text-primary/20 mb-4">{item.step}</div>
                  <div className="p-3 sm:p-4 bg-primary/10 rounded-2xl w-fit mx-auto mb-4">
                    <item.icon className="w-7 sm:w-8 h-7 sm:h-8 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">{item.desc}</p>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AVALIAÇÕES ===== */}
      <section className="py-12 sm:py-16 md:py-28">
        <div className="container mx-auto px-4">
          <Section>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
              Depoimentos <span className="text-gradient">reais</span>
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
              Veja feedbacks diretos no WhatsApp de quem usou os flashcards
            </p>
          </Section>

          {/* WhatsApp proof */}
          <Section>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto items-start">
              {[whatsappProof, avaliacao1, avaliacao2].map((image, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden border border-primary/20 self-start">
                  <img src={image} alt={`Depoimento ${idx + 1}`} className="w-full h-auto block" loading="lazy" />
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* ===== OFERTA ===== */}
      <section id="oferta" className="py-12 sm:py-16 md:py-28 bg-card/50">
        <div className="container mx-auto px-4">
          <Section>
            <div className="max-w-2xl mx-auto">
              <CountdownTimer />

              <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-center mt-6 sm:mt-8 mb-4">
                Garanta seus flashcards <span className="text-gradient">agora</span>
              </h2>

              <div className="bg-card border-2 border-primary/50 rounded-2xl p-4 sm:p-6 md:p-8 mt-6 sm:mt-8 glow-green">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">
                  Tudo o que você recebe:
                </h3>

                <div className="max-w-xl mx-auto space-y-2.5 sm:space-y-3.5 mb-8 sm:mb-10">
                  {[
                    "+3000 flashcards prontos e organizados",
                    "Conteúdo completo para vestibulares de medicina",
                    "Dicas exclusivas de professores",
                    "Organização por matéria e tema",
                    "Método de repetição espaçada incluso",
                    "Acesso imediato após a compra",
                    "Atualizações futuras gratuitas",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 sm:gap-3 leading-relaxed">
                      <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 mt-0.5 text-primary shrink-0" />
                      <span className="text-foreground text-sm sm:text-base">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center mb-6 sm:mb-8 py-5 sm:py-7 border-y border-border/60">
                  <p className="text-muted-foreground line-through text-base sm:text-lg">De R$ 197,00</p>
                  <div className="mt-3 flex flex-col items-center gap-1">
                    <span className="text-muted-foreground text-base sm:text-xl">por apenas</span>
                    <div className="inline-flex items-end justify-center leading-none">
                      <span className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primary tracking-tight">R$ 37</span>
                      <span className="text-primary text-xl sm:text-2xl md:text-3xl font-semibold mb-1">,90</span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-3">ou 4x de R$ 10,22 sem juros</p>
                </div>

                <CTAButton text="QUERO MEUS FLASHCARDS — R$ 37,90" className="w-full max-w-xl mx-auto justify-center" />

                <div className="flex flex-wrap justify-center gap-x-3 sm:gap-x-5 gap-y-2 mt-6 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <CreditCard className="w-3.5 h-3.5" /> Pix, cartão ou boleto
                  </div>
                  <div className="flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5" /> Compra 100% segura
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5" /> Garantia de 7 dias
                  </div>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* ===== GARANTIA ===== */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Section>
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Garantia Incondicional de 7 Dias
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                Se por qualquer motivo você sentir que os flashcards não são para você,
                basta enviar um e-mail em até 7 dias após a compra e devolvemos <strong className="text-foreground">100% do seu dinheiro</strong>.
                Sem perguntas, sem burocracia. O risco é todo meu.
              </p>
            </div>
          </Section>
        </div>
      </section>

      {/* ===== SEÇÃO FINAL ===== */}
      <section className="py-12 sm:py-16 md:py-28 bg-card/50">
        <div className="container mx-auto px-4">
          <Section>
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-24 sm:w-32 h-24 sm:h-32 rounded-full overflow-hidden border-4 border-primary/50 mx-auto mb-6 sm:mb-8 glow-green">
                <img src={whatsappImageFinal} alt="Depoimento WhatsApp" className="w-full h-full object-cover" />
              </div>

              <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-6">
                Se eu consegui <span className="text-gradient">5 aprovações em medicina</span>,
                <br />você também pode
              </h2>

              <p className="text-muted-foreground text-base sm:text-lg mb-8 sm:mb-10 max-w-xl mx-auto">
                O mesmo material que fez a diferença na minha jornada está disponível para você agora.
                Não deixe para depois o que pode mudar o seu futuro hoje.
              </p>

              <CTAButton text="QUERO COMEÇAR AGORA — R$ 37,90" />

              <p className="text-xs sm:text-sm text-muted-foreground mt-6 flex items-center justify-center gap-2">
                <Gift className="w-4 h-4 text-secondary" />
                Vagas limitadas com esse preço especial
              </p>
            </div>
          </Section>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-6 sm:py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © {new Date().getFullYear()} · Flashcards Medicina · Todos os direitos reservados
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Este produto não garante aprovação. Os resultados variam de acordo com o esforço individual.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
